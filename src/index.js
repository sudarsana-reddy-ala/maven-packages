const { MySqlUtil } = require('./mysql')

//comments
async function testSqlInjection(){
    console.log("Hello World");
    const mySqlUtil = new MySqlUtil();
    const data = await mySqlUtil.getUsers({
        username: 'test',
        password: 'test123'
    })

    console.log(data);
}

testSqlInjection();

