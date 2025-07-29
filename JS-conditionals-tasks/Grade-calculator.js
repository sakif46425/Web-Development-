let Score = 80;

if (Score >= 90 && Score <= 100)
{
    console.log("Grade: A+");
}
else if(Score >= 80 && Score <= 89)
{
    console.log("Grade:B+");
}

else if(Score >= 70 && Score <= 79)
{
    console.log("Grade:C+");
}

else if(Score >= 60 && Score <=  69)
{
    console.log("Grade:D+");
}
else if (Score >= 0 && Score <= 59)
{
    console.log("Grade:F");
}
else{
    console.log("Invalid score. please Enter a value between 0 and 150.");
}