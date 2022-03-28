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
                    "\n"+"Tax ID: " + Datos["Tax"] + 
                    "\n"+"Brand: " + Datos["Brand"] + 
                    "\n"+"Industry: " + Datos["Industry"] + 
                    "\n"+"Country: " + Datos["Countr"] + 
                    "\n"+"Description: " + Datos["Description"] + 
                    "\n"+"Start date:" + Datos["Start"] + 
                    "\n"+"Delivery date: " + Datos["Delivery"] + 
                    "\n"+"Naming: " + Datos["Naming"] + 
                    "\n"+"New Brand: " + Datos["NewBrand"] + 
                    "\n"+"Rebrand: " + Datos["Rebrand"] + 
                    "\n"+"Brand Applications: " + Datos["BrandApplications"] + 
                    "\n"+"Brand Book: " + Datos["BrandBook"] + 
                    "\n"+"Social Media: " + Datos["SocialMedia"] + 
                    "\n"+"Packaging: " + Datos["Packaging"] + 
                    "\n"+"Signage: " + Datos["Signage"] + 
                    "\n"+"Naming Systems: " + Datos["NamingSystems"] + 
                    "\n"+"Advertisement: " + Datos["Advertisement"]+ 
                    "\n"+"Presentation: " + Datos["Presentation"]+ 
                    "\n"+"Catalog: " + Datos["Catalog"]+ 
                    "\n"+"Infographic: " + Datos["Infographic"]+ 
                    "\n"+"Illustration: " + Datos["Illustration"]+ 
                    "\n"+"Iconography: " + Datos["Iconography"]+ 
                    "\n"+"Photo Manipulation: " + Datos["PhotoManipulation"] + 
                    "\n"+"UI Design: " + Datos["UIDesign"] + 
                    "\n"+"UX Design: " + Datos["UXDesign"] + 
                    "\n"+"Front End: " + Datos["FrontEnd"]
                    },
                },
                Subject: { Data: "TBE: New Project " },
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