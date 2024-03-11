export const voterData =
    [
        {
            "voter_id": 1,
            "f_name": "John",
            "l_name": "Doe",
            "DOB": "1985-04-12",
            "social_security_number": "01a54629efb952287e554eb23ef69c52097a75aecc0e3a93ca0855ab6d7a31a0",
            "contact": [
                {
                    "contact_id": 1,
                    "contact_type": "email",
                    "contact_value": "john.doe@example.com"
                },
                {
                    "contact_id": 2,
                    "contact_type": "phone",
                    "contact_value": "+1234567890"
                }
            ],
            "address": [
                {
                    "address_id": 1,
                    "street": "123 Main St",
                    "city": "Anytown",
                    "state": "CA",
                    "zip_code": "90210",
                    "country": "USA",
                    "capture_date": "2024-03-10T00:00:00Z"
                }
            ],
            "account": {
                "account_id": 1,
                "account_email": "john.doe@example.com",
                "password": "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f",
                "capture_date": "2024-03-10T00:00:00Z"
            },
            "engagements": [
                {
                    "device": "desktop",
                    "client_delivery": "web",
                    "engagement_metadata": { "clicked": ["home", "about"] },
                    "capture_time": "2024-03-10T12:34:56Z",
                    "type": "click"
                }
            ],
            "metaData": [
                {
                    "type": "preference",
                    "data": { "newsletter": "subscribed" }
                }
            ],
            "userTracker": [
                {
                    "ip_address": "192.168.1.1",
                    "mac_address": "00:1B:44:11:3A:B7",
                    "browser_cookie": "bcookie123",
                    "capture_access": "2024-03-10T12:34:56Z"
                }
            ]
        },
        {
            "voter_id": 2,
            "f_name": "Jane",
            "l_name": "Smith",
            "DOB": "1990-06-15",
            "social_security_number": "ecdbc061a36dd6495e016ba4696dedbc4c0b822b4d6ec55b4fb57d17f1df5695",
            "contact": [
                {
                    "contact_id": 3,
                    "contact_type": "email",
                    "contact_value": "jane.smith@example.com"
                },
                {
                    "contact_id": 4,
                    "contact_type": "phone",
                    "contact_value": "+1987654321"
                }
            ],
            "address": [
                {
                    "address_id": 2,
                    "street": "456 Elm St",
                    "city": "Springfield",
                    "state": "IL",
                    "zip_code": "62704",
                    "country": "USA",
                    "capture_date": "2024-03-11T00:00:00Z"
                }
            ],
            "account": {
                "account_id": 2,
                "account_email": "jane.smith@example.com",
                "password": "f7dc5194694a5f842391a4740ce43d261855fc57af15e20c7875f832b028b48b",
                "capture_date": "2024-03-11T00:00:00Z"
            },
            "engagements": [
                {
                    "device": "mobile",
                    "client_delivery": "app",
                    "engagement_metadata": { "interactions": ["search", "view profile"] },
                    "capture_time": "2024-03-11T13:45:00Z",
                    "type": "interaction"
                }
            ],
            "metaData": [
                {
                    "type": "settings",
                    "data": { "dark_mode": true }
                }
            ],
            "userTracker": [
                {
                    "ip_address": "192.168.2.2",
                    "mac_address": "00:1C:22:12:3A:C7",
                    "browser_cookie": "jcookie456",
                    "capture_access": "2024-03-11T13:45:00Z"
                }
            ]
        },

        {
            "voter_id": 3,
            "f_name": "Alice",
            "l_name": "Johnson",
            "DOB": "1988-09-22",
            "social_security_number": "2e54cc08456e5401868e64bf1ca1f597e0af65d4e111c94b514344796363fe8f",
            "contact": [
                {
                    "contact_id": 5,
                    "contact_type": "email",
                    "contact_value": "alice.johnson@example.com"
                },
                {
                    "contact_id": 6,
                    "contact_type": "phone",
                    "contact_value": "+2345678901"
                }
            ],
            "address": [
                {
                    "address_id": 3,
                    "street": "789 Oak St",
                    "city": "Metropolis",
                    "state": "NY",
                    "zip_code": "10550",
                    "country": "USA",
                    "capture_date": "2024-03-12T00:00:00Z"
                }
            ],
            "account": {
                "account_id": 3,
                "account_email": "alice.johnson@example.com",
                "password": "e0e6097a6f8af07daf5fc7244336ba37133713a8fc7345c36d667dfa513fabaa",
                "capture_date": "2024-03-12T00:00:00Z"
            },
            "engagements": [
                {
                    "device": "tablet",
                    "client_delivery": "email",
                    "engagement_metadata": { "newsletter_read": ["2024-03-01", "2024-03-08"] },
                    "capture_time": "2024-03-12T14:56:00Z",
                    "type": "read"
                }
            ],
            "metaData": [
                {
                    "type": "feedback",
                    "data": { "service_rating": 5 }
                }
            ],
            "userTracker": [
                {
                    "ip_address": "192.168.3.3",
                    "mac_address": "00:1D:33:21:3B:C8",
                    "browser_cookie": "acookie789",
                    "capture_access": "2024-03-12T14:56:00Z"
                }
            ]
        },
        {
            "voter_id": 4,
            "f_name": "Bob",
            "l_name": "White",
            "DOB": "1975-12-03",
            "social_security_number": "74e4145b168aa2249718acd393752a0e4e625acc7adb46875d80f82e717ce94e",
            "contact": [
                {
                    "contact_id": 7,
                    "contact_type": "email",
                    "contact_value": "bob.white@example.com"
                },
                {
                    "contact_id": 8,
                    "contact_type": "phone",
                    "contact_value": "+3456789012"
                }
            ],
            "address": [
                {
                    "address_id": 4,
                    "street": "1012 Pine St",
                    "city": "Gotham",
                    "state": "NJ",
                    "zip_code": "07097",
                    "country": "USA",
                    "capture_date": "2024-03-13T00:00:00Z"
                }
            ],
            "account": {
                "account_id": 4,
                "account_email": "bob.white@example.com",
                "password": "cb824cd5fe4950a77e36776d275f8f7039682babd490d5da3bc8fd31f4c2254c",
                "capture_date": "2024-03-13T00:00:00Z"
            },
            "engagements": [
                {
                    "device": "smartwatch",
                    "client_delivery": "notification",
                    "engagement_metadata": { "alerts": ["voting reminder", "poll location change"] },
                    "capture_time": "2024-03-13T15:30:00Z",
                    "type": "alert"
                }
            ],
            "metaData": [
                {
                    "type": "account_activity",
                    "data": { "last_login": "2024-03-12T18:00:00Z" }
                }
            ],
            "userTracker": [
                {
                    "ip_address": "192.168.4.4",
                    "mac_address": "00:1E:44:31:4C:D9",
                    "browser_cookie": "bcookie1012",
                    "capture_access": "2024-03-13T15:30:00Z"
                }
            ]
        },
        {
            "voter_id": 5,
            "f_name": "Clara",
            "l_name": "Green",
            "DOB": "1992-05-18",
            "social_security_number": "dc1a34b02ce21e0641a1ede14cbed494e3d01ce6f8c739805b971b90b6006843",
            "contact": [
                {
                    "contact_id": 9,
                    "contact_type": "email",
                    "contact_value": "clara.green@example.com"
                },
                {
                    "contact_id": 10,
                    "contact_type": "phone",
                    "contact_value": "+4567890123"
                }
            ],
            "address": [
                {
                    "address_id": 5,
                    "street": "1314 Maple St",
                    "city": "Star City",
                    "state": "WA",
                    "zip_code": "98101",
                    "country": "USA",
                    "capture_date": "2024-03-14T00:00:00Z"
                }
            ],
            "account": {
                "account_id": 5,
                "account_email": "clara.green@example.com",
                "password": "339a443ef16430d717fb0796927816630dc1feebdcf511d309600b69724ee9cf",
                "capture_date": "2024-03-14T00:00:00Z"
            },
            "engagements": [
                {
                    "device": "laptop",
                    "client_delivery": "website",
                    "engagement_metadata": { "pages_viewed": ["candidates", "voting methods"] },
                    "capture_time": "2024-03-14T16:45:00Z",
                    "type": "navigation"
                }
            ],
            "metaData": [
                {
                    "type": "device_info",
                    "data": { "OS": "Windows", "browser": "Firefox" }
                }
            ],
            "userTracker": [
                {
                    "ip_address": "192.168.5.5",
                    "mac_address": "00:1F:55:41:5D:E0",
                    "browser_cookie": "ccookie1314",
                    "capture_access": "2024-03-14T16:45:00Z"
                }
            ]
        }
    ];