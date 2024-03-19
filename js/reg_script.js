
    var isEditable = true;
    if (!isEditable){
        disableInputs();
    }else{
        enableInputs();
    }
    document.getElementById('submit').addEventListener('click', function (event) {
        event.preventDefault();

        if (!isEditable){
            disableInputs();
        }else{
            enableInputs();
        }

        var inputs = document.querySelectorAll('.inputField');
        var regExpRegNo = /^[0-9]-{2}[A-Z]{3}[0-9]{4}$/;
        var regExpEmail = /^[a-zA-Z0-9._-]+@vitstudent.ac.in$/;
        var isEmpty = false;

        for (var i = 0; i < 7; i++) {
            var input = inputs[i];
            var reqdmsg = document.getElementById('reqdmsg' + (i + 1));
            if (input.value.trim() === '') {
                reqdmsg.innerText = "Required field";
                isEmpty = true;
                isEditable = false;
            } else {
                reqdmsg.innerText = "";
            }
        }
        for (var i = 0; i < 4; i++) {
            var regInput = document.getElementById('reg' + (i + 1)).value.trim();
            var eIDInput = document.getElementById('eID' + (i + 1)).value.trim();
            var regMsg = document.getElementById('message' + (i + 1));
            var eIDMsg = document.getElementById('message' + (i + 5));

            if (regInput !== '' && !regExpRegNo.test(regInput)) {
                regMsg.innerText = "Invalid Registration No";
                isEditable = false;
                return;
            } else {
                regMsg.innerText = "";
            }

            if (eIDInput !== '' && !regExpEmail.test(eIDInput)) {
                eIDMsg.innerText = "Invalid email ID";
                isEditable = false;
                return;
            } else {
                eIDMsg.innerText = "";
            }
        }

        if (isEmpty) {
            alert('Fields Are Empty');
            return;
        }

        return;
    });
    
   

    function enableInputs() {
        var inputs = document.querySelectorAll('.inputField');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute('disabled');
        }
    }

    function disableInputs() {
        var inputs = document.querySelectorAll('.inputField');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('disabled', 'disabled');
        }
    }

