import 'package:flutter/material.dart';

class FormValidation1 extends StatefulWidget {
  @override
  _FormValidation1 createState() => _FormValidation1();
}

class _FormValidation1 extends State<FormValidation1> {
  final _formkey = GlobalKey<FormState>();
  final usernameControl = TextEditingController();
  final emailControl = TextEditingController();
  final passwordControl = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Form validation"),
      ),
      body: Material(
        child: Center(
          child: Padding(
            padding: EdgeInsets.all(20),
            child: Form(
              key: _formkey,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  TextFormField(
                    controller: usernameControl,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      label: Text("User name"),
                      prefixIcon: Icon(Icons.person),
                    ),
                    validator: (e) {
                      if (e == null || e.isEmpty) {
                        return "Please, enter usernamr";
                      }
                      return null;
                    },
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  TextFormField(
                    controller: emailControl,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      label: Text("Enter email"),
                      prefixIcon: Icon(Icons.email),
                    ),
                    validator: (e) {
                      if (e == null || e.isEmpty) {
                        return "Please, enter enter email";
                      }
                      if(!e.contains("@")){
                        return "Enter proper email address";
                      }

                      return null;
                    },
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  TextFormField(
                    controller: passwordControl,
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      label: Text("Enter password"),
                      prefixIcon: Icon(Icons.person),
                    ),
                    validator: (e) {
                      if (e == null || e.isEmpty) {
                        return "Please , enter password";
                      }
                      if (e.length < 6) {
                        return "Enter password more than 6 letters";
                      }
                      return null;
                    },
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  ElevatedButton(onPressed: () {
                    if(_formkey.currentState?.validate()?? false){
                      ScaffoldMessenger.maybeOf(context)?.showSnackBar(
                        SnackBar(content: Text("Submiting !!"))
                      );
                    }
                  }, child: Text("Submit"))
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
