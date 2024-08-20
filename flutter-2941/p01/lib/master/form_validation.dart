import 'package:flutter/material.dart';

class FormValidation extends StatefulWidget {
  @override
  _FormValidation createState() => _FormValidation();
}

class _FormValidation extends State<FormValidation> {
  final _formKey = GlobalKey<FormState>();
  final usernameController = TextEditingController();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Maru Form"),
      ),
      body: Material(
        child: Center(
            child: Padding(
          padding: EdgeInsets.all(30),
          child: Form(
            key: _formKey,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                TextFormField(
                  controller: usernameController,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      label: Text("User Name"),
                      prefixIcon: Icon(Icons.person)),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Please, enter username";
                    }
                    return null;
                  },
                ),
                SizedBox(
                  height: 20,
                ),
                TextFormField(
                  controller: emailController,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      label: Text("Email Address"),
                      prefixIcon: Icon(Icons.email)),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Please, enter email";
                    }

                    if (!value.contains("@")) {
                      return "Enter proper email address";
                    }
                    return null;
                  },
                ),
                SizedBox(
                  height: 20,
                ),
                TextFormField(
                  controller: passwordController,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      label: Text("User Password"),
                      prefixIcon: Icon(Icons.password)),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Please, enter password";
                    }
                    if (value.length < 6) {
                      return "Enter password more than 6 letters";
                    }
                    return null;
                  },
                ),
                SizedBox(
                  height: 20,
                ),
                ElevatedButton(
                    onPressed: () {
                      if (_formKey.currentState?.validate() ?? false) {

                        ScaffoldMessenger.maybeOf(context)?.showSnackBar(
                          SnackBar(content: Text("Submiting !!"))
                        );
                      }
                    },
                    child: Text("Submit"))
              ],
            ),
          ),
        )),
      ),
    );
  }
}
