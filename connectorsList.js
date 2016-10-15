var myTestConnector = [
    {
        "name": "myTestConnector",
        "title": "QA Test",
        "description": "A collection of operations for the QA Test",
        "version": "1.0",
        "tags": [
            "service",
            "myTestConnector"
        ],
        "icon": {
            "type": "streamline",
            "value": "text"
        },
        "messages": [
            {
                "name": "contains",
                "title": "Contains",
                "description": "Checks to see if some text contains a particular pattern.",
                "input_schema": {
                    "type": "object",
                    "properties": {
                        "value": {
                            "type": "string",
                            "title": "Text to search",
                            "description": "Text you'd like to search through."
                        },
                        "contains": {
                            "type": "string",
                            "title": "Pattern",
                            "description": "The text pattern you'd like to look for in the main text value."
                        }
                    },
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "required": [
                        "value",
                        "contains"
                    ],
                    "advanced": [],
                    "additionalProperties": false
                },
                "output_schema": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "type": "object",
                    "properties": {
                        "result": {
                            "type": "boolean"
                        }
                    }
                }
            },
            {
                "name": "get_user",
                "title": "Get User",
                "description": "Get the current user",
                "input_schema": {
                    "type": "object",
                    "properties": {},
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "required": [],
                    "advanced": [],
                    "additionalProperties": false
                },
                "output_schema": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "number"
                        },
                        "name": {
                            "type": "string"
                        },
                        "company": {
                            "type": "string"
                        },
                        "location": {
                            "type": "string"
                        },
                        "twitter": {
                            "type": "string"
                        }
                    }
                }
            },
            {
                "name": "is_url",
                "title": "Is URL?",
                "description": "Checks to see if a text value is a valid URL.",
                "input_schema": {
                    "type": "object",
                    "properties": {
                        "value": {
                            "type": "string",
                            "title": "Text to check",
                            "description": "The text value to check to see if it's a URL."
                        }
                    },
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "required": [
                        "value"
                    ],
                    "advanced": [],
                    "additionalProperties": false
                },
                "output_schema": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "type": "object",
                    "properties": {
                        "result": {
                            "type": "boolean"
                        }
                    }
                }
            },
            {
                "name": "is_email",
                "title": "Is email?",
                "description": "Checks to see if an text string is an email address.",
                "input_schema": {
                    "type": "object",
                    "properties": {
                        "email": {
                            "type": "string",
                            "title": "Email address",
                            "description": "The text you want to check."
                        }
                    },
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "required": [
                        "email"
                    ],
                    "advanced": [],
                    "additionalProperties": false
                },
                "output_schema": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "type": "object",
                    "properties": {
                        "result": {
                            "type": "boolean"
                        }
                    }
                }
            },
            {
                "name": "is_generic_domain",
                "title": "Is generic domain?",
                "description": "Checks to see if a website domain is a \"generic\" domain, such as gmail.com or hotmail.com.",
                "input_schema": {
                    "type": "object",
                    "properties": {
                        "domain": {
                            "type": "string",
                            "title": "Domain / URL / email",
                            "description": "A website domain, full URL, or email address. If something other than the exact domain is specified, the domain will be auto extracted."
                        }
                    },
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "required": [
                        "domain"
                    ],
                    "advanced": [],
                    "additionalProperties": false
                },
                "output_schema": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "type": "object",
                    "properties": {
                        "result": {
                            "type": "boolean"
                        }
                    }
                }
            },
            {
                "name": "is_numeric",
                "title": "Is numeric?",
                "description": "Checks to see if the text value is numeric.",
                "input_schema": {
                    "type": "object",
                    "properties": {
                        "value": {
                            "type": "string",
                            "title": "Text to check",
                            "description": "The text value to check to see if it's numeric."
                        }
                    },
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "required": [
                        "value"
                    ],
                    "advanced": [],
                    "additionalProperties": false
                },
                "output_schema": {
                    "$schema": "http://json-schema.org/draft-04/schema#",
                    "type": "object",
                    "properties": {
                        "result": {
                            "type": "boolean"
                        }
                    }
                }
            }
        ]
    }
]

exports.myTestConnector = myTestConnector;