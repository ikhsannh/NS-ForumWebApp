

function App() {

  return (
    <>

      <div className="container text-center mx-auto mt-">
      <h1>Lets doit!</h1>

      <div>
      
      <div>
        <input type="email" name="email" id="email_text" placeholder="email" /><br/><br/>
        <input type="password" name="password" id="email_text" placeholder="password" /> <br/>                
      </div>
      
      <div className="m-5">
          <button className="border-2 rounded-lg p-2 mr-2" id="signUp" type="button" name="button">Register </button>
          <button className="p-2 border-2 rounded-lg mr-2" id="login"  type="button" name="button">Login </button>
          <button className="hidden border-2 rounded-lg"id="logout" type="button" name="button">Logout </button>
      </div>
        
      </div>
      </div>
    
    </>
  );
}
export default App;