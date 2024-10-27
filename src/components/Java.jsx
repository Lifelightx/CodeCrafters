import React from 'react'
import Topics from './Topics'
import Section from './Section'

function Java() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen md:overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Java Topics</h2>
        <ul className="space-y-0">
          <Topics name="Introduction" />
          <Topics name="OOPS" />
          <Topics name="Exceptions" />
          <Topics name="Collections" />
          <Topics name="Multithreading" />
          <Topics name="Strings" />
          <Topics name="DSA" />
        </ul>
      </div>

      {/* Main content */}
      <div className="w-full md:w-3/4 p-5 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 font-quicksand text-blue-600">Learn Java</h1>

        <Section id="introduction"
          topic="1. What is JAVA?"
          content="Java is high-level, object-oriented programming language developed by Sun Microsystems in 1995. It's designed to have minimal implementation dependencies making it platform-independent. It is Owned by Oracle."
        />
        <Section id="2"
          topic="2. What is JDK?"
          content="JDK(JAVA DEVELOPEMENT KIT) is a software development environment used for developing java applications. It includes the java runtime environment(JRE) and other development tools." />
        <Section id="3"
          topic="3. What is JRE?"
          content="The JRE(Java Runtime Environment) is the runtime portion of java software, which is all we need to run java applications but not develop them."
        />
        <Section
          id="4"
          topic="4. What is JVM?"
          content="The JVM(Java Virtual Machine) is a platform independent environment that converts java bytecode into machine language and executes it."
        />
        <Section id="5"
          topic="5. What is Bytecode?"
          content="Bytecode is the language that is understood by JVM(Java Virtual Machine). It is platform-independent and can be executed on any platform that has a JVM."
        />
        <Section id="6"
          topic="6. What is difference between JDK, JRE and JVM?"
          content="JDK: It is used for development (Contains JRE + tools for development) 
          JRE: It is used for execution (Contains JVM + libraries) 
          JVM: It is used for execution (Converts bytecode into machine code)"
        />
        <Section id="7"
          topic="7. Why java is platform independent?"
          content="Java is platform independent because it is compiled to bytecode, which is machine independent and any machine with JVM can execute it. As every OS has their own JVM, java application can run on any machine."
        />
        <Section id="8"
          topic="8. What is the main feature of Java language?"
          content="a) Java is platform independent. 
           b) Java is used to develop scalable and secure internet based applications using tools like Servlet, JSP, JDBC.
           c) Java is used to develop distributed applications using tools like RMI(Remote Method Invocation).
           d) Java is multi-threaded, which means it can execute multiple threads in a program at the same time.
           e) Java is interpreted and compiled both.
           "
        />
        <Section id="9"
          topic="9. What is Object Oriented Programming?"
          content="OOP is a programming paradigm based on the concept of classes and objects. Key features of OOP are: Encapsulation, Inheritance, Polymorphism and Abstraction." />

        <Section id="oops"
          topic="10. What is class?"
          content="A class is a blueprint for creating objects. It is a template that defines the properties(attributes) and behaviors(methods) of an object."
          code={`class ClassName {
  //attribute
  int a = 10; 
  //method
  void display() { 
    System.out.println("Hello");
  }
}`}
          language="java"
        />
        <Section id="object"
          topic="11. What is object?"
          content="An object is an instance of a class. It is a real-world entity that has properties and behaviors defined by the class."
        />
        <Section id="12"
          topic="12. What is encapsulation?"
          content="Encapsulation is the process of wrapping the data(attributes) and code(methods) that operates on the data into a single unit known as class and restricting direct access to some components."
          code={`class Encapsulation {
  private int a = 10;
  private void display() {
    System.out.println("Hello");
  }
}`}
          language="java"
        />

        <Section
          id="13"
          topic="13. What is inheritance?"
          content="Inheritance is a mechanism in which one class acquires the properties and behaviors of another class.
          It helps code reusability "
        />
        <Section id="14" 
          topic="14. Types of inheritance"
          content="There are 5 types of inheritance in java: Single, Multilevel, Hierarchical, Multiple and Hybrid."
          code={`
//Single Inheritance
class Animal {
    void eat() { System.out.println("Eating..."); }
}

class Dog extends Animal {
    void bark() { 
      System.out.println("Barking..."); 
}
}
//Multilevel Inheritance

class Animal {
    void eat() { System.out.println("Eating..."); }
}

class Dog extends Animal {
    void bark() { System.out.println("Barking..."); }
}

class Puppy extends Dog {
    void weep() { System.out.println("Weeping..."); }
}

//Hierarchical Inheritance
class Animal {
    void eat() { System.out.println("Eating..."); }
}

class Dog extends Animal {
    void bark() { System.out.println("Barking..."); }
}

class Cat extends Animal {
    void meow() { System.out.println("Meowing..."); }
}
`}
          language="java"
        />
        <Section id="15"
          topic="15. What is polymorphism?"
          content="Polymorphism is the ability of a method to perform different tasks based on the object that it is acting upon."
        />
        <Section id="16"
          topic="16. Types of polymorphism"
          content="There are two types of polymorphism in java: Compile time polymorphism and Runtime polymorphism.
          Compile time polymorphism is achieved through method overloading and Runtime polymorphism is achieved through method overriding."
        />
        <Section id="17"
          topic="17. What is abstraction?"
          content="Abstraction is the process of hiding the implementation details of a method from the user and showing only the functionality of the method."
          code={`class Abstraction {
void display() {
  System.out.println("Hello");
}
public static void main(String[] args) {
    Abstraction obj = new Abstraction();
}
}`}
      language="java"
        />
        <Section id="18"
          topic="18. What is interface?"
          content="An interface is a collection of abstract methods and final variables. 
          It is used to achieve abstraction and multiple inheritance.
          Object of an interface cannot be created.
          Interface does not have constructor."
        />
        <Section id="19"
          topic="19. What is abstract class?"
          content="An abstract class is a class that is declared with the abstract keyword. It may or may not contain abstract methods."
          code={`abstract class AbstractClass {
  abstract void display();
  void show() {
    System.out.println("Hello");
  }
}`}
          language="java"
        />
        <Section id="20"
          topic="20. What is final keyword?"
          content="The final keyword is a non-access modifier used for restricting the user from changing the value of a variable, method or class.It can be used with variables, methods and classes.We can declare constant variables with final keyword."
          code={`class FinalKeyword {
final int a = 10;
final void display() {
  System.out.println("Hello");
}
}`}
          language="java"
        />
        <Section id="21"
          topic="21. What is the difference between abstract class and interface?"
          content="Abstract class can have abstract and non-abstract methods. Interface can have only abstract methods.
          Abstract class can have final variables. Interface cannot have final variables.
          Abstract class can have constructors. Interface cannot have constructors."

        />
        <Section id="22"
          topic="What is a constructor?"
          content="Constructor is a special method which name is same as the class name.
          It does not have a return type.
          It is used to initialize objects. It is called when an object of a class is created."
          code={`class MyClass {
  MyClass() {
    System.out.println("Constructor called");
  }
}`}
          language="java"
        />
        <Section id="23"
         topic="23. What is default constructor?"
         content="A constructor that has no parameters is called default constructor."
         code={`class MyClass {
  MyClass() {
    System.out.println("Default constructor called");
  }
}`}
          language="java"
        />
        <Section id="24"
          topic= "What is method overloading?"
          content="Method overloading is a feature that allows a class to have more than one method with the same name, but different parameter list."
        />
        <Section id="25"
          topic="25. What is method overriding?"
          content="Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its parent class."
        />
        <Section id="26"
          topic="26. What is super keyword?"
          content="The super keyword is used to refer to the parent class object.
          It is used to call the parent class constructor, instance variables and methods."
        />
        <Section id="27"
          topic="27. What is this keyword?"
          content="The this keyword is used to refer to the current object in a method or constructor."
          code={`class ThisKeyword {
  int a = 10;
  void display() {
    int a = 20;
    System.out.println(a); //20
    System.out.println(this.a); //10
  }
  public static void main(String[] args) {
    ThisKeyword obj = new ThisKeyword();
    obj.display(20);
  }
}`}
          language="java"
        />
        <Section id="28"
          topic="28. What is the difference between this and super?"
          content="The this keyword is used to refer to the current object in a method or constructor.
          The super keyword is used to refer to the parent class object."
        />
        <Section id="29"
          topic="29. What is Package in java?"
          content="A package is a collection of classes and interfaces.
          It is used to group related classes and interfaces.
          It is used to avoid name conflicts."
        />
        <Section id="30"
          topic="30. What is import keyword?"
          content="The import keyword is used to import a package or a class into the current program."
        />
        <Section id="31"
          topic="31. What is static keyword?"
          content="The static keyword is used to declare static variables, methods and blocks.
          It is used to share the same variable or method of a class."
        />
        <Section id="exceptions"
          topic="32. What is exceptions?"
          content="An exception is an event that disrupts the normal flow of the program.
          It is not a serious problem and it can be recovered.
          There are two types of exceptions: Checked exceptions and Unchecked exceptions."
        />
        <Section id="33"
          topic="33. What is checked exception?"
          content="A checked exception is a compile-time exception.It is checked by the compiler.
          Compiler forces to handle this exception.
          ex: IOException, SQLException, etc.
          "
        />
        <Section id="34"
          topic="34. What is unchecked exception?"
          content="An unchecked exception is a runtime exception.It is not checked by the compiler.
          Compiler does not force to handle this exception.
          ex: NullPointerException, ArithmeticException, etc.
          "
        />
        <Section id="35" 
          topic="35. Difference between error and exception?"
          content="Error: It is an irrecoverable event that occurs due to severe problems that prevent the program from continuing execution.
          ex: StackOverflowError, OutOfMemoryError, etc.
          Exception: It is an event that disrupts the normal flow of the program.
          It is not a serious problem and it can be recovered.
          There are two types of exceptions: Checked exceptions and Unchecked exceptions."
        />
        <Section id="36"
          topic="36. What is exception handling?"
          content="Exception handling is a mechanism to handle runtime errors.
          It is used to handle the runtime errors and to continue the execution of the program."
        />
        <Section id="37"
          topic="37. Types of exception handling"
          content="There are two types of exception handling: Try-catch and Throws."
        />
          <Section id="38"
          topic="38. What is try-catch block?"
          content="The try-catch block is used to catch the exceptions.
          It is used to handle the runtime errors and to continue the execution of the program."
          code={`try {
  //code that may throw an exception
} catch(Exception e) {
  //code to handle the exception
}`}
          language="java"
        />
        <Section id="39"
          topic="39. What is finally block?"
          content="The finally block is used to execute the code after try-catch block.
          It is used to release the resources and to close the connections."
          code={`try {
  //code that may throw an exception
} catch(Exception e) {
  //code to handle the exception
} finally {
  //code that will execute after try-catch block
}`}
          language="java"
        />
        <Section id="40"
          topic="40. What is throws keyword?"
          content="The throws keyword is used in method signature to declare that a method may throw an exception."
          code={`void display() throws IOException {
  //code that may throw an exception
}`}
          language="java"
        />
        <Section id="41"
          topic="41. What is throw keyword?"
          content="The throw keyword is used to throw an exception explicitly."
        />
        <Section id="42"
          topic="42. What is difference between final, finally and finalize?"
          content="final: It is a non-access modifier used to declare constant variables, methods and classes.
          finally: It is a block used to execute the code after try-catch block.
          finalize: It is a method used to perform cleanup activities when an object is garbage collected."
        />
        <Section id="accessmodifiers"
          topic="43. Different types of access modifiers"
          content="public: It is an access modifier used to declare public variables, methods and classes.
          private: It is an access modifier used to declare private variables, methods and classes.
          protected: It is an access modifier used to declare protected variables, methods and classes.
          default: It is an access modifier used to declare default variables, methods and classes."
        />
      <Section id="44"
        topic="44. What is constructor overloading?"
        content="Constructor overloading is a feature that allows a class to have more than one constructor with the same name, but different parameter list."
        />
      <Section id="45"
        topic="45. What is exactly System.out.println()?"
        content="System.out.println() is a method used for printing output to the console in Java. Let's break it down:
        - System: This is a final class that contains several useful class fields and methods.
        - out: This is a static member of the System class. It is an instance of PrintStream and is typically connected to the console.
        - println(): This is a method of PrintStream. It prints the specified data followed by a new line."
            />
        <Section id="46"
          topic="46. What is Marker Interface?"   
          content="A marker interface is an interface that has no methods or constants.
          It is used to mark the objects for special processing."
          code={`interface MarkerInterface {
  //no methods or constants
}`}
          language="java"
        />
        <Section id="47"
          topic="47. What is the difference between local variable and instance variable?"
          content="Local variable: It is a variable declared inside a method.
          It is not shared between objects and does not have a default value.
          Instance variable: It is a variable declared inside a class, but outside a method.
          It is shared between objects and has a default value."
          code={`class MyClass {
  int a = 10; //instance variable
  void display() {
    int b = 20; //local variable
  }
}`}
          language="java"
        />
        <Section id="collections"
          topic="48. What is collection?"
          content="Collection is a framework that provides an architecture to store and manipulate a group of objects."
        />
        <Section id="48"
          topic="48. What is the difference between Collection and Collections?"
          content="Collection is an interface and Collections is a class.
          Collection is used to store a group of objects and Collections is used to manipulate a group of objects."
        />
        <Section id="49"
          topic="49. What is the difference between an Array and ArrayList?"
          content="Array: It is a fixed size data structure. Arrays can hold primitive data types and objects.
          ArrayList: It is a dynamic data structure. The size of ArrayList can be increased or decreased according to adding and removing elements.ArrayList hold objects "

        />
        <Section id="50"
          topic="50. What is HashMap?"
          content="HashMap is a class that implements the Map interface.
          It is used to store key-value pairs.
          It is not synchronized and does not allow duplicate keys."
          code={`HashMap<String, Integer> map = new HashMap<>();`}
          language="java"
        />
        <Section id="51"
          topic="51. What is difference between HashMap and Hashtable?"
          content="HashMap: It is not synchronized and does not allow null key.
          Hashtable: It is synchronized and allows null key."
        />
        <Section id="multithreading"
          topic="52. What is difference between List and Set?"
          content="List: It is an interface that extends Collection interface.
          It is used to store a group of objects in a sequence.
          It allows duplicate elements.
          Set: It is an interface that extends Collection interface.
          It is used to store a group of unique objects in a collection."
        />
     <Section id="53"
      topic="53. what is multithreading?"
      content="Multithreading is a Java feature that allows the concurrent execution of two or more parts of a program for maximum utilization of CPU." />
      <Section id="54"
        topic="54. What is the difference between multithreading and multiprocessing?"
        content="Multithreading is a feature that allows the concurrent execution of two or more parts of a program for maximum utilization of CPU.
        Multiprocessing is a feature that allows the concurrent execution of two or more processes for maximum utilization of CPU."
      />
      <Section id="55"
        topic="55. What is the difference between Thread and Runnable?"
        content="Thread: It is a class that extends Thread class. 
        Runnable: It is an interface that implements Runnable interface."
      />
      <Section id="56"
        topic="56. What is the difference between start() and run() method?"
        content="start(): It is a method that starts a new thread by allocating a separate memory location for the new thread.
        run(): It is a method that executes the code inside the thread."
        code={`class MyThread extends Thread {
  public void run() {
    System.out.println("Thread is running");
  }
  public static void main(String[] args) {
    MyThread obj = new MyThread();
    obj.start();
  }
}`}
        language="java"
      />
      <Section id="57"
        topic="57. What is the difference between sleep() and wait() method?"
        content="sleep(): It is a method that pauses the execution of the current thread for a specified amount of time.
        wait(): It is a method that pauses the execution of the current thread until another thread invokes the notify() or notifyAll() method."
        code={`class MyThread extends Thread {
  public void run() {
    try {
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }
}`}
        language="java" 
      />
      <Section id="58"
        topic="58. What is the difference between notify() and notifyAll() method?"
        content="notify(): It is a method that wakes up a single thread that is waiting for the lock.
        notifyAll(): It is a method that wakes up all the threads that are waiting for the lock."
      />
      <Section id="59"
        topic="59. What is the difference between yield() and join() method?"
        content="yield(): It is a method that pauses the execution of the current thread and allows other threads to execute.
        join(): It is a method that waits for the current thread to complete execution before the other threads can execute."
      />
      <Section id="60"
        topic="60. What is the difference between a thread and a process?"
        content="A thread is a subset of a process.
        A process can contain multiple threads.
        Threads share the same memory space, variables and code."
      />
      <Section id="61"
        topic="61. What is synchronization?"
        content="Synchronization is a mechanism that allows only one thread to access the shared resource at a time.
        It is used to prevent thread interference and data inconsistence."
      />
      <Section id="62" 
        topic="62. What is deadlock?"
        content="Deadlock is a situation where two or more threads are waiting for each other to release the lock.
        It is a serious problem and it can cause the program to hang."
      />
      <Section id="63"  
        topic="63. What is a daemon thread?"
        content="A daemon thread is a thread that runs in the background and performs tasks such as garbage collection."
        code={`Thread daemonThread = new Thread(() -> {
  while (true) {
    System.out.println("Daemon thread is running");
  }
});
daemonThread.setDaemon(true);
daemonThread.start();`}
        language="java"
      />
          <Section id="64"
        topic="64. What is garbage collection?"
        content="Garbage collection is a process of releasing the memory occupied by unused objects."
      />
      <Section id="65"
        topic="65. What is the difference between '==' and equals() method?"
        content="==: It is a operator that compares the reference of two objects.
        equals(): It is a method that compares the content of two objects."
      />
      <Section id="strings"
        topic="66. What is the String pool?"
        content="The string pool is a memory where Java stores all string literals. Strings with the same value are stored in the same memory location."
      />
      <Section id="67"
          topic="67. What is the difference between String, StringBuilder and StringBuffer?"
        content="String: It is an immutable class. Strings are stored in the string pool.
        StringBuilder: It is Mutable class and not synchronized.
        StringBuffer: It is thread safe and synchronized."
        code={`String str = "Hello";
StringBuilder sb = new StringBuilder("Hello");
StringBuffer sbf = new StringBuffer("Hello");`}
        language="java"
      />
      <Section id="68"
          topic="68. What is the purpose of main method?"
        content="The main method is the entry point of a Java program.
        It is used to start the execution of a program."
      />
      <Section id="69"
          topic="69. What are annotations?"
        content="Annotations provide metadata about the program to the compiler and runtime. Examples: @Override, @SuppressWarnings, @Deprecated"
      />
      <Section id="70"
          topic="70. What is Wrapper class?"
        content="Wrapper class is a class that wraps the primitive data types into objects.
        It is used to convert primitive data types into objects and vice versa."
      />
      <Section id="dsa" 
        topic="71. Why Strings are immutable?"
        content="Strings are immutable because it is more efficient to use the same memory location for the same string value."
      />
      <Section id="72"
        topic="72. What is the difference between creating a String using String literal and new keyword?"
        content="String literal: It is stored in the string pool.
        new keyword: It is stored in the heap memory."
        code={`String str1 = "Hello";
String str2 = new String("Hello");`}
        language="java"
      />
      <Section id="73"
       topic="73. Write a program to check if a string is palindrome or not?"
       content={""}
       code={`import java.util.Scanner;

public class CheckAStringIsPalindrome {
    public static boolean revStr(String str){
        String rev = "";
        for(int i=str.length()-1; i>=0;i--){
            rev += str.charAt(i);
        }
        return str.equals(rev);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        if(revStr(str)){
            System.out.println("String is palindrome");
        }
        else {
            System.out.println("Not Palindrome");
        }
    }
}
`}       language="java"
      />
      <Section id="74"
        topic="74. Write a program to reverse a string?"
        content={""}
        code={`public class ReverseAString {
    public static void reverseStr(String str){
        String revStr = "";
        for(int i=str.length()-1;i>=0;i--){
            revStr += str.charAt(i);
        }
        System.out.println(revStr);
    }
    public static void main(String[] args) {
        String name = "Jeebanjyoti Mallik";
        reverseStr(name);
    }
}
`} 
        language="java"
        />
        <Section id="75"
          topic="75. Write a program to check if a string is anagram or not?"
          content={""}
          code={`
import java.util.Arrays;

public class AanagramsChecker {
    public static void angramsChecker(String str1, String str2){
        String toLower1 = str1.replaceAll("\\s+","").toLowerCase();
        String toLower2 = str2.replaceAll("\\s+", "").toLowerCase();
        char[] arr1 = toLower1.toCharArray();
        char[] arr2 = toLower2.toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        if(arr1.toString().equals(arr1.toString())){
            System.out.println("Strings are Anagrams");
        }
        else{
            System.out.println("Strings are not Anagrams");
        }
    }
    public static void main(String[] args) {
        String str1 = "Silent";
        String str2 = "Listen";
        angramsChecker(str1, str2);
    }
}
`}
          language="java"
        />
        <Section id="76"
          topic="76. Write a program to find the frequency of each character in a string?"
          content={""}
          code={`import java.util.HashMap;
import java.util.Map;

public class CharacterFrequency {
    public static void findCharFrequency(String str) {
        Map<Character, Integer> frequencyMap = new HashMap<>();
        
        // Convert string to lowercase to treat 'A' and 'a' as same
        str = str.toLowerCase();
        
        // Count frequency of each character
        for (char c : str.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);
            }
        }
        
        // Print the frequency of each character
        for (Map.Entry<Character, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("'" + entry.getKey() + "' : " + entry.getValue());
        }
    }
    
    public static void main(String[] args) {
        String input = "Hello, World!";
        System.out.println("Input string: " + input);
        System.out.println("Character frequencies:");
        findCharFrequency(input);
    }
}`}
          language="java"
        />
        <Section id="77"
          topic="77. Count the number of words in a string?"
          content={""}
          code={`public class WordCounter {
    public static int countWords(String str) {
        if (str == null || str.isEmpty()) {
            return 0;
        }
        
        // Split the string by whitespace and count the resulting array length
        String[] words = str.trim().split("\\s+");
        return words.length;
    }
    
    public static void main(String[] args) {
        String input = "This is a sample sentence to count words.";
        int wordCount = countWords(input);
        System.out.println("Input string: " + input);
        System.out.println("Word count: " + wordCount);
    }
}`} 
        language="java"
        />
      <Section id="78"
      topic="78. Write a program to count number of vowels and consonants in a string?"
      content={""}
      code={`
public class CountNoOfVowelsAndConsonants {
    public static void countNumberOfVowels(String str) {
        int vowels = 0, consonants = 0;
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                vowels++;
            }
            else if (ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u' && ch != ' ') {
                consonants++;
            }
        }
        System.out.println("Vowels: "+ vowels);
        System.out.println("Consonants: "+ consonants);

    }
    public static void main(String[] args) {
        countNumberOfVowels("Jeebanjyoti Mallik is a good Boy");
    }
}
`}
      language="java"
      />
      <Section id="79"
        topic="79. Write a program to determine a string has all unique characters?"
        content={""}
        code={`
import java.util.LinkedHashSet;

public class DetermineStringHasAllUniqueCharacters {
    public static boolean uniqueCharChecker(String str){
        LinkedHashSet<Character> lhs = new LinkedHashSet<>();
        char[] strArr = str.toLowerCase().toCharArray();
        for( char ch : strArr){
            if(!lhs.add(ch)){
                return false;
            }
        }
        return true;
        
    }
    public static void main(String[] args) {
        String str = "Jebanjyot Mlik";
        if(uniqueCharChecker(str)){
            System.out.println("String have all unique character");
        }
        else{
            System.out.println("String does not have all unique character");
        }
    }
}
`}
        language="java"
      />
      <Section id="80"
        topic="80. Find the occurence of a character in a string?"
        content=""
        code = {`
public class OccaranceOfACharInString {
    public static int occaranceOfChar(String str, char ch){
        int occarance = 0;
        for(int i=0; i<str.length(); i++){
            if(str.charAt(i) == ch){
                occarance++;
            }
        }
        return occarance;
    }
    public static void main(String[] args) {
        String str = "Jeebanjyoti Mallik";
        char ch = 'e';
        int ocr = occaranceOfChar(str, ch);
        System.out.println(ocr);

    }
}
`}
        language="java"
      />
      <Section id="81"
      topic="81. Write a program to find the first non-repeating character in a string?"
      content={""}
      code={`public class FirstNonRepeatingChar {
    public static char findFirstNonRepeatingChar(String str) {
        // Create a HashMap to store character frequencies
        Map<Character, Integer> charFrequency = new HashMap<>();
        
        // Count the frequency of each character
        for (char c : str.toCharArray()) {
            charFrequency.put(c, charFrequency.getOrDefault(c, 0) + 1);
        }
        
        // Find the first character with frequency 1
        for (char c : str.toCharArray()) {
            if (charFrequency.get(c) == 1) {
                return c;
            }
        }
        
        // If no non-repeating character is found, return a default value
        return '\0';
    }

    public static void main(String[] args) {
        String str = "aabbcdeeff";
        char result = findFirstNonRepeatingChar(str);
        
        if (result != '\0') {
            System.out.println("The first non-repeating character is: " + result);
        } else {
            System.out.println("No non-repeating character found.");
        }
    }
}`}
      language="java"
      />
      <Section id="82"
      topic="82. Write a program to remove duplicate characters from a string?"
      content={""}
      code={`
import java.util.LinkedHashSet;

public class RemoveDulicateFromString {

    public static void removeDuplicate(String str){
        LinkedHashSet<Character> lhs = new LinkedHashSet<>();
        char[] stAr = str.toCharArray();
        for(char ch : stAr){
            lhs.add(ch);
        }
        StringBuffer sb = new StringBuffer();
        for(char ch: lhs){
            sb.append(ch);
        }
        System.out.println(sb.toString());

    }
    public static void main(String[] args) {
        String str = "Jeebanjyoti Mallik";
        removeDuplicate(str);
    }
}`}
      language="java"
      />


      </div>
    </div>
  )
}

export default Java
