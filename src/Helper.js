const titleslug =(sousser,target)=>{


   
         target.value = sousser.value
         .toLowerCase()                 // सभी अक्षरों को छोटे अक्षरों में बदलें
         .trim()                        // अनेवश्यक खाली स्थान हटा दें
         .replace(/[^a-z0-9\s-]/g, '')  // केवल अक्षर, अंक और खाली स्थान को अनुमति दें
         .replace(/\s+/g, '-')          // एक या एक से अधिक खाली स्थानों को हाइफन से बदलें
         .replace(/-+/g, '-');          // एक से अधिक हाइफनों को एक हाइफन में बदलें

}

export  {titleslug};