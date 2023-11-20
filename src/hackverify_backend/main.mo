actor {

  let map = HashMap.HashMap<Text, Text>(5, Text.equal, Text.hash);

  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };


};
