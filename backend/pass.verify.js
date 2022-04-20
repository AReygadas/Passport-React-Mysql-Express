const bcrypt = require('bcrypt');


async function VerifyPass()
{
    const Pass ='admin';
    const hashing ='$2b$10$4AjKl7S8vFCC6ZSAaKUNjevg9vVSnfnqEJRfsQ2hKPF9WdKeUMf0a';
    const isMatch = await bcrypt.compare(Pass,hashing);
    console.log(isMatch);
}

VerifyPass();