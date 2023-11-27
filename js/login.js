window.addEventListener("load", function () {

    document.getElementById("btnLogin").addEventListener("click", validarLogin);
    document.getEementById("user").addEventListener("keypress", function () {
        tocarAudio("audio/tecla.mp3")
    });
    document.getElementById("pwd").addEventListener("keypress", function () {
        tocarAudio("audio/tecla.mp3")
    });

    function validarLogin() {
        var user = document.getElementById("user");
        var pwd = document.getElementById("pwd");
    
        if (!user.value) {
            tocarAudio("audio/msgErro.mp3")
            alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "img/logo.png", 30, "");
        }
        else if (!pwd.value)  {
            tocarAudio("audio/msgErro.mp3")
            alertWifi(`Senha em branco. Informe uma senha`, false, 0, "img/logo.png", 30, "");
        }
        else 
            processarLogin(user.value, pwd.value);
    }

    function processarLogin(user, pwd) {
        if (typeof(Storage) != "undefined") {
            usuarios = localStorage.getItem("usuarios");
            if (!usuarios)  {
                tocarAudio("audio/msgErro.mp3");
                alertWifi(`Usuário inexistente. Tente um usuário diferente!`, false, 0, "img/logo.png", 30, "");
            }
            else {
                var usuarios = JSON.parse(usuarios);
                var achou = false;
                for (i=0; i<usuarios.length; i++)
                    if (usuarios[i].nome == user && usuarios[i].senha == pwd) {
                        achou = true;
                        break;
                    }
                if (achou) window.open("jogo.html","_self");
                else  {
                    tocarAudio("audio/msgErro.mp3");
                    alertWifi(`Usuário inexistente. Tente um usuário diferente!`, false, 0, "img/logo.png", 30, "");
                }
            }
        }
        else  {
            tocarAudio("audio/msgErro.mp3");
            alertWifi(`Problemas no navegador. Não será possível executar o jogo!`, false, 0, "img/logo.png", 30, "");
        }
    }
});


