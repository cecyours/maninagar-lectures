import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class SignUp extends StatefulWidget{
  @override
  _SignUp createState()=> _SignUp();


}

class _SignUp extends State<SignUp>{

  final form_key = GlobalKey<FormState>();
  final userControl = TextEditingController();
  final emailControl = TextEditingController();
  final paswordControl = TextEditingController();
  final repasswordControl = TextEditingController();
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
    final form = form_key.currentState;

    if(form != null){
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
           key: form_key,
           child: Column(
           mainAxisAlignment: MainAxisAlignment.center,
             children: [
               TextFormField(
                 controller: userControl,
                 decoration: InputDecoration(
                   border: OutlineInputBorder(),
                   label: Text("Username"),
                   prefixIcon: Icon(Icons.person),

                 ),
                 validator: (e){
                   if( e==null || e.isEmpty){
                     return "Enter ur username";
                   }
                   return null;
                 },

               ),
               SizedBox(height: 10,),
               TextFormField(
                 controller: emailControl,
                 decoration: InputDecoration(
                   border: OutlineInputBorder(),
                   label: Text("Email address"),
                   prefixIcon: Icon(Icons.email),

                 ),
                 validator: (e){
                   if( e==null || e.isEmpty ){
                     return "Enter ur Address";
                   }
                   if(!e.contains("@")){
                     return "Enter proper Email";
                   }
                   return null;
                 },
               ),
               SizedBox(height: 10,),
               TextFormField(
                 controller: paswordControl,
                 decoration: InputDecoration(
                   border: OutlineInputBorder(),
                   label: Text("Enter password"),
                   prefixIcon: Icon(Icons.password),

                 ),
                 validator: (e){
                   if(e==null || e.isEmpty){
                     return "Enter password";
                   }
                   if( e.length < 6){
                     return "Enter password greater then 6";
                   }
                   return null;
                 },
               ),
               SizedBox(height: 10,),
               TextFormField(
                 controller: repasswordControl,
                 decoration: InputDecoration(
                   border: OutlineInputBorder(),
                   label: Text("Re-enter password"),
                   prefixIcon: Icon(Icons.password),

                 ),
                 validator: (e){
                   if( e == null || e.isEmpty){
                     return "Re-enter password";
                   }

                   if(e!=paswordControl.text){
                     return "password does't same";
                   }

                   return null;
                 },
               ),
               SizedBox(height: 10,),
               ElevatedButton(
                   onPressed: () {
                     if (form_key.currentState?.validate() ?? false) {
                       ScaffoldMessenger.maybeOf(context)?.showSnackBar(
                           SnackBar(content: Text("Submiting !!")));
                     }
                   },
                   child: Text("Submit"))
             ],

           ),
         ),
        ),
      ),
    );
  }

}