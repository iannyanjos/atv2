function mascara_telefone ()
        {
       
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
           
 var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
        } if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }
 function mascara_dinheiro_cifrao ()
        {
        
            var dinheiro_formatado = document.getElementById("dinheiro").value
           
            if (dinheiro_formatado[0]!="R")
            {
                if(dinheiro_formatado[0]!=undefined)
                {
                    document.getElementById("dinheiro").value="R$"+dinheiro_formatado[0];
                }
            }
          
            if (dinheiro_formatado[1]!="$")
            {
                if(dinheiro_formatado[1]!=undefined)
                {
                    document.getElementById("dinheiro").value=dinheiro_formatado[0]+"$"+dinheiro_formatado[1];
                }
            }
        }
        function mascara_dinheiro_virgula ()
        {
            var dinheiro_formatado = document.getElementById("dinheiro").value;

      
            if (dinheiro_formatado[dinheiro_formatado.length-3]!=",") 
            {
               
                if (dinheiro_formatado[dinheiro_formatado.length-2]==",") 
                {
                    
                    document.getElementById("dinheiro").value = dinheiro_formatado+"0";
                }
                else
                {
                    
                    if (dinheiro_formatado[dinheiro_formatado.length-1]==",") 
                    {
                       
                        document.getElementById("dinheiro").value = dinheiro_formatado+"00";
                    }
                    else
                    {
                      
                        document.getElementById("dinheiro").value = dinheiro_formatado+",00";
                    }
                }

            }
          
        }
        function moeda(z){
v = z.value;

v=v.replace(/\D/g,"") 
v=v.replace(/(\d{1})(\d{14})$/,"$1.$2")
v=v.replace(/(\d{1})(\d{11})$/,"$1.$2") 
v=v.replace(/(\d{1})(\d{8})$/,"$1.$2")
v=v.replace(/(\d{1})(\d{5})$/,"$1.$2") 
v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2")
z.value = v;
}
function mascara_cep()
        { var cep_formatado = document.getElementById("cep").value
            if (cep_formatado[2]!=".")
            {
                if (cep_formatado[2]!=undefined)
                {
                    document.getElementById("cep").value=cep_formatado.slice(0,2)+"."+cep_formatado[2];
                }
            }
        
            if (cep_formatado[6]!="-")
            {
                if(cep_formatado[6]!=undefined)
                {
                    document.getElementById("cep").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
                }
            }

        }       
        const abrirmodal = document.querySelector("#open-modal");
const fecharmodal = document.querySelector("#fechar");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#modal-fade");

function abrirFechar(){
   fade.classList.toggle("show")
    modal.classList.toggle("show")

}





const check = document.querySelector("#check");

function darkmode() {
    const darkelement = document.body;

    if (check.checked) {
        darkelement.classList.add("dark");
        localStorage.setItem("dark-mode", "true");
    } else {
        darkelement.classList.remove("dark");
        localStorage.setItem("dark-mode", "false");
    }
}



addEventListener("DOMContentLoaded", () => {
    const darkModeStatus = localStorage.getItem("dark-mode");
    
    if (darkModeStatus === "true") {
        check.checked = true;
    } else {
        check.checked = false;
    }
    
    darkmode();
});


check.addEventListener("change", darkmode);
