class Data{
  get loginData(){
    return [
      {username: 'invalidLoginName', password: 'invalidPassword', message: 'Error: Incorrect login or password provided.'},
      {username: 'password', password: 'loginname', message: 'Error: Incorrect login or password provided.'},
      {username: 'loginname', password: '', message: 'Error: Incorrect login or password provided.'},
      {username: '', password: 'password', message: 'Error: Incorrect login or password provided.'},
      {username: '', password: '', message: 'Error: Incorrect login or password provided.'},
    
    ]
  }
}
module.exports = {Data: new Data()}