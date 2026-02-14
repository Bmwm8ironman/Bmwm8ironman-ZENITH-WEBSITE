import { db } from './src/lib/db';

/**
 * This script verifies that our Prisma setup is working correctly
 * by performing various database operations.
 */
async function main() {
  try {
    console.log('\n🔍 Zenith Database Verification Test\n');
    
    // 1. Test database connection with a simple query
    console.log('1️⃣ Testing database connection...');
    const userCount = await db.users.count();
    console.log(`✅ Connected successfully! Found ${userCount} users.\n`);
    
    // 2. Get more detailed information
    console.log('2️⃣ Getting table statistics...');
    const stats = {
      users: await db.users.count(),
      assignments: await db.assignments.count(),
      clubs: await db.clubs.count(),
      events: await db.events.count(),
      messages: await db.chat_messages.count(),
      posts: await db.posts.count(),
      attempts: await db.assignment_attempts.count(),
    };
    
    console.table(stats);
    console.log('✅ Successfully retrieved table statistics.\n');
    
    // 3. Verify joins work by getting a sample user with related data
    console.log('3️⃣ Testing relationships with a sample query...');
    const sampleUser = await db.users.findFirst({
      include: {
        assignment_attempts: {
          take: 3,
          orderBy: { created_at: 'desc' }
        }
      },
    });
    
    if (sampleUser) {
      console.log(`✅ Found user: ${sampleUser.name} (${sampleUser.email})`);
      console.log(`✅ User has ${sampleUser.assignment_attempts.length} recent assignment attempts.\n`);
    } else {
      console.log('⚠️ No users found to test relationships.\n');
    }
    
    // 4. Check for transaction support
    console.log('4️⃣ Testing transaction support...');
    const currentTime = new Date();
    await db.$transaction(async (tx) => {
      // Just count within the transaction
      const txUserCount = await tx.users.count();
      console.log(`✅ Transaction worked correctly. Found ${txUserCount} users in transaction.\n`);
    });
    
    console.log('\n✅ All database tests passed successfully!\n');
    console.log('Your Prisma setup with Supabase is working correctly.');
    console.log('You can now use the db client from "@/lib/db" in your application.\n');
    
  } catch (error) {
    console.error('\n❌ Database test failed:', error);
  } finally {
    await db.$disconnect();
  }
}

// Run the test
main();
