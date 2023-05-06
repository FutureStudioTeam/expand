export default [
    "arduinoc: {\n    \"include_MePS2\": {\n        \"prefix\": \"include_MePS2\",\n        \"body\": \"#include <MePS2.h>\",\n        \"description\": \"The driver for MeAuriga board by MakeBlock.\",\n        \"kind\": 25\n    },\n    \"MePS2\": {\n        \"prefix\": \"MePS2\",\n        \"body\": \"MePS2\",\n        \"kind\": 5\n    },\n    \"MePS2_Constructor\": {\n        \"prefix\": \"MePS2\",\n        \"body\": \"MePS2 MePS2(PORT_5);\",\n        \"description\": \"Alternate Constructor which can call your own function to map the MePS2 to arduino port,If the hardware serial was selected, we will used the hardware serial.\",\n        \"kind\": 25\n    },\n    \"MePS2::MeAnalog\": {\n        \"prefix\": \"MePS2::MeAnalog\",\n        \"body\": \"MeAnalog(${1:button})\",\n        \"description\": \"Read the handle remote sensing analog value.\",\n        \"kind\": 1\n    },\n    \"MePS2::ButtonPressed\": {\n        \"prefix\": \"MePS2::ButtonPressed\",\n        \"body\": \"ButtonPressed(${1:button})\",\n        \"description\": \"This function is used to check the button whether to press.\",\n        \"kind\": 1\n    },\n    \"MePS2::loop\": {\n        \"prefix\": \"MePS2::loop\",\n        \"body\": \"loop()\",\n        \"description\": \"Save the MePS2 datas to the datalist.\",\n        \"kind\": 1\n    }\n}"
];