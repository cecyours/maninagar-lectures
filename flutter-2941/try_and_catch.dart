void main() {
  List<String> s = ["Mohan", "Heena", "Denver"];
  try {
    print(s[2]);
    int m = 10 ~/ 3;

    print(m);
  } catch (e) {
    print(e);
    print(s[8]);
  } finally {
    print("i am iron man");
  }

  print("Most imp statement");
}
