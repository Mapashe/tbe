var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

var SENDER = 'ing.alejandra.prz@gmail.com';
var RECEIVER = 'ruben.ing.phz117@gmail.com';

/*var SENDER = 'ruben.ing.phz117@gmail.com';
var RECEIVER = 'ing.alejandra.prz@gmail.com';*/

exports.handler = async function (event) {
    return await EnviaCorreo(event);
};


async function EnviaCorreo(event) {
    try {
        var Datos = JSON.parse(event.body);
        console.table(Datos);
        
        var params = {
            Destination: {
                ToAddresses: [
                    'ing.alejandra.prz@gmail.com', 'ruben.ing.phz117@gmail.com'
                ],
            },
            Message: {
                Body: {
                    Text: { 
                        Data: 
                             "Name: " + Datos["Name"] + 
                        "\n"+"Phone: " + Datos["Phone"] + 
                        "\n"+"Email: " + Datos["Email"] + 
                        "\n"+"Company: " + Datos["Company"] + 
                        "\n"+"Description: " + Datos["Description"]
                    },
                },
                Subject: { Data: "TBE: Info Form" },
            },
            Source: SENDER,
        };
        
        await ses.sendEmail(params).promise();
        
        return "Correo envíado con éxito a: " + Datos["Name"];
    } catch (error) {
        console.error(error);
        return "Se produjo un error.";
    }
}
