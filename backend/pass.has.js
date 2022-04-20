const bcrypt = require('bcrypt');


async function hashPass()
{
    const Pass ='admin';
    const has = await bcrypt.hash(Pass, 10);
    console.log(has);
}

hashPass();