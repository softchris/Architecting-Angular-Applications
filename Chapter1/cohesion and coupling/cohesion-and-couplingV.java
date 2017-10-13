class FakePrinter implements IPrinter {
  print(IPrintable printable) { System.out.println("printing"); }
}

class Program {
  FakePrinter fakePrinter;
  Program(FakePrinter fakePrinter){ this.fakePrinter = fakePrinter; }
  public static void main(String [] args) {  
    Program program = new Program(new FakePrinter());   
  }
}