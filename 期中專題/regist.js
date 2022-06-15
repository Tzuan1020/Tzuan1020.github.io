
function registcheck()
{
    var count=[0,0,0,0,0]
    var textvalue = document.getElementsByName('Password')[0].value;
    var textvalue1= document.getElementsByName('repeat password')[0].value;
    var checkbox=document.getElementsByName('agree')[0];
    var textvalue2 = document.getElementsByName('phone')[0].value;
    if (textvalue.length < 8)
    {
        document.getElementById('phonemsg').innerHTML = '長度至少8位';
    }
    else
    {
        for(var i=0; i<textvalue.length; i++)
        {
            if(textvalue.substr(i,1)<"0" || textvalue.substr(i,1)>"9")
            {
                document.getElementById('phonemsg').innerHTML='必須全是數字';
            }
        }
        count[0]=1;
    }
        if (textvalue!=textvalue1)
        {
            document.getElementById('phonemsg2').innerHTML='與密碼不同';
        }
        else
        {
            count[1]=1;
        }
    if(textvalue1==null)
    {
        document.getElementById('phonemsg2').innerHTML='請再次輸入密碼';
    }
    else
    {
        count[2]=1;
    }
    if(checkbox.checked==false)
    {
        document.getElementById('phonemsg3').innerHTML='請勾選同意表單';
    }
    else
    {
        count[3]=1;
    }
    if(textvalue2.length !=10)
    {
        document.getElementById('phonemsg4').innerHTML = '長度必為10位';
    }
    else
    {
        count[4]=1;
    }
    if(count[0]==count[1] && count[1]==count[2] && count[2]==count[3] && count[3]==count[4] && count[1]==1)
    {
        location.href="index.html";
    }
   
}
function clearPhoneMsg(){
    document.getElementById('phonemsg').innerHTML='';
    document.getElementById('phonemsg2').innerHTML='';
    document.getElementById('phonemsg3').innerHTML='';
    document.getElementById('phonemsg4').innerHTML='';
}