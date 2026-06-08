const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

async function check() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    const Admin = mongoose.model('Admin', new mongoose.Schema({}, { strict: false, collection: 'admins' }));
    const all = await Admin.find();
    console.log('Admins:', JSON.stringify(all, null, 2));
    
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

check();




