// let num = 10;
// console.log(num);
// num = "Gaurav";
// console.log(num);
// console.log(num[2]);            // OUTPUT => 'u'
// console.log(num[21]);           // undefined -> because index is out of bound.

// let name = 21
// console.log(name);

// name = true;
// console.log(name);

// name = "Gaurav";
// console.log(name);

// console.log("====================================================");

// let naam;
// console.log(naam)

/* ******************** SUBSTR METHOD IN JAVASCRIPT ******************************* */
    
    // -> substr() 
    // let str = "Gaurav Kumar";
    //     console.log(str.substr(2));     //Starting Index
    //     console.log(str.substr(2,3));   //Starting Index , length of Sub-String.
    //     console.log(str.substr(-4));       //Print Substring from negative index 4, "Negative Index starts from backward"
    //     console.log(str.substr(-5,2));      //String will print from negative index of 5 and having length 2.
    //     console.log(str.substr(-5,-3));     //Empty String print hogi, because length will never be negative.
    //     console.log("====================================================");

// SUBSTRING METHOD IN JAVASTRING

    // -> substring()
    // let str = "Gaurav Kumar"
    //     console.log(str);
    //     console.log(str.substring(3));  // Substring from index 3
    //     console.log(str.substring(2,5));    //(Starting Index,Ending Index) -> Ending index will exclude
    //     console.log(str.substring(5,2));    //If starting index > ending index then swapping occurs; Here Starting index will become 2 and Ending index will become 5.
    //     console.log(str.substring(-5,2));      // When -ve index is given then it assumed to be 0 ; Here, it works as : str.substrong(0,2);
    //     console.log(str.substring(-5,-2));      //Here, it works as str.substring(0,0);
    //     console.log(str.substring(3,-2));

        // NOTE : -ve value will termed as 0.

    // -> indexOf()
    // let str = "Gaurav Kumar";
    //     console.log(str.indexOf('a'));      //It will return the first occurance index of 'a'.
    //     console.log(str.indexOf('a',str.indexOf('a')+1));      // It will return the second occurance index of 'a'.
    //     console.log(str.indexOf('a',str.indexOf('a',str.indexOf('a')+1)+1));    // 3rd Occurance of 'a'
        
    //     console.log(str.indexOf('a',3));        // index 3 ke bad kis index pr 'a' aa rha hai, uska index return karega..

    // -> replace() => (what to replace,what we want)

        // console.log(str.replace('a','#'));      // 1st Occurance of a will change.
        // console.log(str.replaceAll('a', '#'));  // All occurances of 'a' will change.

    // repeat() => No. of times we want to repeat.

        // console.log(str.repeat(2)); // String will repeat 2 times.

    // toUpperCase()

        // console.log(str.toUpperCase());     // All characters will become Capital.

    // toLowerCase()

        // console.log(str.toLowerCase());     // All characters will become Small.

    // trim() => It removes the extra space at starting and at ending of the String.

        // console.log('         gaurav           ');
        // console.log('         gaurav           '.trim());
        // let st = "       kumar        ";
        // console.log(st.trim());


        let name = "Gaurav";
        console.log(name[-2]);      // It will return undefined.