import 'package:flutter/material.dart';
import 'package:p01/mehta/sign_up.dart';

class LogIn extends StatefulWidget{

  @override
  _LogIn createState()=> _LogIn();

}

class _LogIn extends State<LogIn>{
  final form_k = GlobalKey<FormState>();
  final userControl = TextEditingController();
  final passwordControl = TextEditingController();

  @override
  void initState(){
    super.initState();
    userControl.addListener(valid);
  }

  void free(){
    userControl.dispose();
    super.dispose();
  }


  void valid(){
    final form = form_k.currentState;
    if( form!=null){
      form.validate();
    }
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(title: Text("Sign Up / Login page"),),
      body: Material(

        child: Padding(
          padding: EdgeInsets.all(20),
          child: Form(
          key: form_k,

          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,

            children: [

              TextFormField(
                decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  label: Text("Enter email / username "),
                  prefixIcon: Icon(Icons.person)
                ),
                validator: (e){
                  if( e==null || e.isEmpty){
                    return "Enter ur username";
                  }
                  return null;
                },
              ),
              SizedBox(height: 20,),

              TextFormField(
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    label: Text("Enter password "),
                    prefixIcon: Icon(Icons.password)
                ),
                validator: (e){
                  if( e==null || e.isEmpty ){
                    return "Enter ur Address";
                  }
                  if(e.contains("@")){
                    return "Enter proper Email";
                  }
                  return null;
                },
              ),

              SizedBox(height: 20,),
              ElevatedButton(
                  onPressed: () {
                    if (form_k.currentState?.validate() ?? false) {
                      ScaffoldMessenger.maybeOf(context)?.showSnackBar(
                          SnackBar(content: Text("Submiting !!")));
                    }
                  },
                  child: Text("Submit"),),
              SizedBox(height: 20,),
              ElevatedButton(onPressed: (){
                Navigator.push(context, MaterialPageRoute(builder: (context) =>  SignUp(),));
              }, child: Text("New user ??"),),
            ],
          ),
        ),
      ),
    ),
    );
  }

}