const USER_ID = "bharath_kumar_19102004";
const EMAIL = "bharathkumarmerigala@gmail.com";
const ROLL_NUMBER = "22BCE1573";

const processBfhlData = (req, res) => {
  try {
    const { data } = req.body;
    
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input data"
      });
    }

    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;

    data.forEach(item => {
      const str = String(item);
      
      if (!isNaN(str) && str.trim() !== '') {
        const num = parseInt(str);
        if (num % 2 === 0) {
          evenNumbers.push(str);
        } else {
          oddNumbers.push(str);
        }
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(str)) {
        alphabets.push(str.toUpperCase());
      } else if (str.length === 1 && !/[a-zA-Z0-9]/.test(str)) {
        specialCharacters.push(str);
      }
    });

    const alphabetChars = alphabets.join('').split('').reverse();
    const concatString = alphabetChars.map((char, index) => 
      index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
    ).join('');

    res.status(200).json({
      is_success: true,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: sum.toString(),
      concat_string: concatString
    });

  } catch (error) {
    console.log('Error in bfhl post request user inp -->', req.body.data);
    res.status(500).json({
      is_success: false,
      message: "Internal server error"
    });
  }
};

const getBfhlInfo = (req, res) => {
  res.status(200).json({
    operation_code: 1
  });
};

module.exports = {
  processBfhlData,
  getBfhlInfo
};
