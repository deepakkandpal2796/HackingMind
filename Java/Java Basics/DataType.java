class DataType {
    public static void main(String[] args) {
        //# ========= DataTypes ============ 
        int num1 = 10;
        int num2 = 12;
        int result = num1 + num2;
        byte rating = 2;
        long phoneNo = 742886890;
        short StreetNo = 30234;
        char lineBreak = '^';
        // char lineBreak2 = "^"; //error
        float percentage = 99.99f; // we have to use f in the end to specify it is float otherwise use double datatype
        boolean isAdult = true;
        // boolean isMan = 0; // error
        System.out.println(result);
        System.out.println(rating);
        System.out.println(phoneNo);
        System.out.println(StreetNo);
        System.out.println(lineBreak);
        System.out.println(percentage);
        System.out.println(isAdult);

        /* Data Type 

        Primitive Data Type

        Interger Data Type -> Int has some types also -> byte, short, int, long (contain integer value)
            what is the differnce between these -> all of them has different sizes 
            int - 4 bytes -> Stores whole numbers from -2,147,483,648 to 2,147,483,647.
            long - 8 bytes -> Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.
            short - 2 bytes -> Stores whole numbers from -32,768 to 32,767.
            byte - 1 byte -> Stores whole numbers from -128 to 127.

        Float Data Type -> Float contains -> double and float (contain decimal values)
            float - Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits 
            syntax for float -> float percentage = 99.99f; you have to put f in the end to specify it is float because java treat decimal in double
            double - Stores fractional numbers. Sufficient for storing 15 decimal digits

        Character Data Type -> char (contain single character it could be number,alphabet, symbol e.t.c)
            Stores a single character/letter or ASCII values.
            use single quotes not double quotes or it will give u error.
            It store the as the ascii value, so if we want we can 

        Boolean Data Type - > boolean (countain true or false)
            Stores true or false values.
            it dont store 0 and 1

*/
        
        //# ========= Literals ============ 
        //Litrals are the values that are assigned to a variable.
        // for eg. we can assign a binary no value of headecimal value to the int datatype 
        int binaryNo = 0b101;  //101 is 5 and to use binary we put 0b in front of that 
        System.out.println(binaryNo); // o/p:- 5
        int hexaDecimal = 0x7E;
        System.out.println(hexaDecimal); // o/p:- 126
        // We can use the underscore to make big values readable 
        int bigNumber = 1_000_000;
        System.out.println(bigNumber);
        // The char value is stored as the ASCII value which is numberic in nature and we can manupulate the ASCII value mathematically 
        char c = 'c';
        System.out.println(c); // o/p:- c
        c++;
        System.out.println(c); // o/p:- d

        //# ========= TypeCasting And TypeConversion ============ 

    }
}



