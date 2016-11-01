var myTestConnector =
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

var gitHub =
{
    "name": "github",
    "title": "GitHub",
    "description": "Interact with the GitHub API.",
    "version": "1.0",
    "tags": [
        "service"
    ],
    "icon": {
        "type": "url",
        "value": "//s3.amazonaws.com/images.tray.io/static/icons/github.png"
    },
    "messages": [
        {
            "name": "get_repository",
            "title": "Get repository",
            "description": "Get details about a GitHub repository.",
            "input_schema": {
                "type": "object",
                "properties": {
                    "access_token": {
                        "type": "string",
                        "default_jsonpath": "$.auth.access_token",
                        "title": "Access token"
                    },
                    "username": {
                        "type": "string",
                        "description": "The GitHub username, e.g. \"trayio\"",
                        "title": "Username"
                    },
                    "repository": {
                        "type": "string",
                        "description": "The GitHub repository, e.g. \"falafel\"",
                        "title": "Repository"
                    }
                },
                "$schema": "http://json-schema.org/draft-04/schema#",
                "required": [
                    "access_token",
                    "username",
                    "repository"
                ],
                "advanced": [
                    "access_token"
                ],
                "additionalProperties": false
            },
            "output_schema": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "owner": {
                        "type": "object",
                        "properties": {
                            "login": {
                                "type": "string"
                            },
                            "id": {
                                "type": "number"
                            },
                            "avatar_url": {
                                "type": "string"
                            },
                            "gravatar_id": {
                                "type": "string"
                            },
                            "url": {
                                "type": "string"
                            },
                            "html_url": {
                                "type": "string"
                            },
                            "followers_url": {
                                "type": "string"
                            },
                            "following_url": {
                                "type": "string"
                            },
                            "gists_url": {
                                "type": "string"
                            },
                            "starred_url": {
                                "type": "string"
                            },
                            "subscriptions_url": {
                                "type": "string"
                            },
                            "organizations_url": {
                                "type": "string"
                            },
                            "repos_url": {
                                "type": "string"
                            },
                            "events_url": {
                                "type": "string"
                            },
                            "received_events_url": {
                                "type": "string"
                            },
                            "type": {
                                "type": "string"
                            },
                            "site_admin": {
                                "type": "boolean"
                            }
                        }
                    },
                    "name": {
                        "type": "string"
                    },
                    "full_name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "private": {
                        "type": "boolean"
                    },
                    "fork": {
                        "type": "boolean"
                    },
                    "url": {
                        "type": "string"
                    },
                    "html_url": {
                        "type": "string"
                    },
                    "archive_url": {
                        "type": "string"
                    },
                    "assignees_url": {
                        "type": "string"
                    },
                    "blobs_url": {
                        "type": "string"
                    },
                    "branches_url": {
                        "type": "string"
                    },
                    "clone_url": {
                        "type": "string"
                    },
                    "collaborators_url": {
                        "type": "string"
                    },
                    "comments_url": {
                        "type": "string"
                    },
                    "commits_url": {
                        "type": "string"
                    },
                    "compare_url": {
                        "type": "string"
                    },
                    "contents_url": {
                        "type": "string"
                    },
                    "contributors_url": {
                        "type": "string"
                    },
                    "deployments_url": {
                        "type": "string"
                    },
                    "downloads_url": {
                        "type": "string"
                    },
                    "events_url": {
                        "type": "string"
                    },
                    "forks_url": {
                        "type": "string"
                    },
                    "git_commits_url": {
                        "type": "string"
                    },
                    "git_refs_url": {
                        "type": "string"
                    },
                    "git_tags_url": {
                        "type": "string"
                    },
                    "git_url": {
                        "type": "string"
                    },
                    "hooks_url": {
                        "type": "string"
                    },
                    "issue_comment_url": {
                        "type": "string"
                    },
                    "issue_events_url": {
                        "type": "string"
                    },
                    "issues_url": {
                        "type": "string"
                    },
                    "keys_url": {
                        "type": "string"
                    },
                    "labels_url": {
                        "type": "string"
                    },
                    "languages_url": {
                        "type": "string"
                    },
                    "merges_url": {
                        "type": "string"
                    },
                    "milestones_url": {
                        "type": "string"
                    },
                    "mirror_url": {
                        "type": "string"
                    },
                    "notifications_url": {
                        "type": "string"
                    },
                    "pulls_url": {
                        "type": "string"
                    },
                    "releases_url": {
                        "type": "string"
                    },
                    "ssh_url": {
                        "type": "string"
                    },
                    "stargazers_url": {
                        "type": "string"
                    },
                    "statuses_url": {
                        "type": "string"
                    },
                    "subscribers_url": {
                        "type": "string"
                    },
                    "subscription_url": {
                        "type": "string"
                    },
                    "svn_url": {
                        "type": "string"
                    },
                    "tags_url": {
                        "type": "string"
                    },
                    "teams_url": {
                        "type": "string"
                    },
                    "trees_url": {
                        "type": "string"
                    },
                    "homepage": {
                        "type": "string"
                    },
                    "language": {
                        "type": "null"
                    },
                    "forks_count": {
                        "type": "number"
                    },
                    "stargazers_count": {
                        "type": "number"
                    },
                    "watchers_count": {
                        "type": "number"
                    },
                    "size": {
                        "type": "number"
                    },
                    "default_branch": {
                        "type": "string"
                    },
                    "open_issues_count": {
                        "type": "number"
                    },
                    "has_issues": {
                        "type": "boolean"
                    },
                    "has_wiki": {
                        "type": "boolean"
                    },
                    "has_pages": {
                        "type": "boolean"
                    },
                    "has_downloads": {
                        "type": "boolean"
                    },
                    "pushed_at": {
                        "type": "string"
                    },
                    "created_at": {
                        "type": "string"
                    },
                    "updated_at": {
                        "type": "string"
                    },
                    "permissions": {
                        "type": "object",
                        "properties": {
                            "admin": {
                                "type": "boolean"
                            },
                            "push": {
                                "type": "boolean"
                            },
                            "pull": {
                                "type": "boolean"
                            }
                        }
                    },
                    "subscribers_count": {
                        "type": "number"
                    },
                    "organization": {
                        "type": "object",
                        "properties": {
                            "login": {
                                "type": "string"
                            },
                            "id": {
                                "type": "number"
                            },
                            "avatar_url": {
                                "type": "string"
                            },
                            "gravatar_id": {
                                "type": "string"
                            },
                            "url": {
                                "type": "string"
                            },
                            "html_url": {
                                "type": "string"
                            },
                            "followers_url": {
                                "type": "string"
                            },
                            "following_url": {
                                "type": "string"
                            },
                            "gists_url": {
                                "type": "string"
                            },
                            "starred_url": {
                                "type": "string"
                            },
                            "subscriptions_url": {
                                "type": "string"
                            },
                            "organizations_url": {
                                "type": "string"
                            },
                            "repos_url": {
                                "type": "string"
                            },
                            "events_url": {
                                "type": "string"
                            },
                            "received_events_url": {
                                "type": "string"
                            },
                            "type": {
                                "type": "string"
                            },
                            "site_admin": {
                                "type": "boolean"
                            }
                        }
                    },
                    "parent": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "owner": {
                                "type": "object",
                                "properties": {
                                    "login": {
                                        "type": "string"
                                    },
                                    "id": {
                                        "type": "number"
                                    },
                                    "avatar_url": {
                                        "type": "string"
                                    },
                                    "gravatar_id": {
                                        "type": "string"
                                    },
                                    "url": {
                                        "type": "string"
                                    },
                                    "html_url": {
                                        "type": "string"
                                    },
                                    "followers_url": {
                                        "type": "string"
                                    },
                                    "following_url": {
                                        "type": "string"
                                    },
                                    "gists_url": {
                                        "type": "string"
                                    },
                                    "starred_url": {
                                        "type": "string"
                                    },
                                    "subscriptions_url": {
                                        "type": "string"
                                    },
                                    "organizations_url": {
                                        "type": "string"
                                    },
                                    "repos_url": {
                                        "type": "string"
                                    },
                                    "events_url": {
                                        "type": "string"
                                    },
                                    "received_events_url": {
                                        "type": "string"
                                    },
                                    "type": {
                                        "type": "string"
                                    },
                                    "site_admin": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "name": {
                                "type": "string"
                            },
                            "full_name": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "private": {
                                "type": "boolean"
                            },
                            "fork": {
                                "type": "boolean"
                            },
                            "url": {
                                "type": "string"
                            },
                            "html_url": {
                                "type": "string"
                            },
                            "archive_url": {
                                "type": "string"
                            },
                            "assignees_url": {
                                "type": "string"
                            },
                            "blobs_url": {
                                "type": "string"
                            },
                            "branches_url": {
                                "type": "string"
                            },
                            "clone_url": {
                                "type": "string"
                            },
                            "collaborators_url": {
                                "type": "string"
                            },
                            "comments_url": {
                                "type": "string"
                            },
                            "commits_url": {
                                "type": "string"
                            },
                            "compare_url": {
                                "type": "string"
                            },
                            "contents_url": {
                                "type": "string"
                            },
                            "contributors_url": {
                                "type": "string"
                            },
                            "deployments_url": {
                                "type": "string"
                            },
                            "downloads_url": {
                                "type": "string"
                            },
                            "events_url": {
                                "type": "string"
                            },
                            "forks_url": {
                                "type": "string"
                            },
                            "git_commits_url": {
                                "type": "string"
                            },
                            "git_refs_url": {
                                "type": "string"
                            },
                            "git_tags_url": {
                                "type": "string"
                            },
                            "git_url": {
                                "type": "string"
                            },
                            "hooks_url": {
                                "type": "string"
                            },
                            "issue_comment_url": {
                                "type": "string"
                            },
                            "issue_events_url": {
                                "type": "string"
                            },
                            "issues_url": {
                                "type": "string"
                            },
                            "keys_url": {
                                "type": "string"
                            },
                            "labels_url": {
                                "type": "string"
                            },
                            "languages_url": {
                                "type": "string"
                            },
                            "merges_url": {
                                "type": "string"
                            },
                            "milestones_url": {
                                "type": "string"
                            },
                            "mirror_url": {
                                "type": "string"
                            },
                            "notifications_url": {
                                "type": "string"
                            },
                            "pulls_url": {
                                "type": "string"
                            },
                            "releases_url": {
                                "type": "string"
                            },
                            "ssh_url": {
                                "type": "string"
                            },
                            "stargazers_url": {
                                "type": "string"
                            },
                            "statuses_url": {
                                "type": "string"
                            },
                            "subscribers_url": {
                                "type": "string"
                            },
                            "subscription_url": {
                                "type": "string"
                            },
                            "svn_url": {
                                "type": "string"
                            },
                            "tags_url": {
                                "type": "string"
                            },
                            "teams_url": {
                                "type": "string"
                            },
                            "trees_url": {
                                "type": "string"
                            },
                            "homepage": {
                                "type": "string"
                            },
                            "language": {
                                "type": "null"
                            },
                            "forks_count": {
                                "type": "number"
                            },
                            "stargazers_count": {
                                "type": "number"
                            },
                            "watchers_count": {
                                "type": "number"
                            },
                            "size": {
                                "type": "number"
                            },
                            "default_branch": {
                                "type": "string"
                            },
                            "open_issues_count": {
                                "type": "number"
                            },
                            "has_issues": {
                                "type": "boolean"
                            },
                            "has_wiki": {
                                "type": "boolean"
                            },
                            "has_pages": {
                                "type": "boolean"
                            },
                            "has_downloads": {
                                "type": "boolean"
                            },
                            "pushed_at": {
                                "type": "string"
                            },
                            "created_at": {
                                "type": "string"
                            },
                            "updated_at": {
                                "type": "string"
                            },
                            "permissions": {
                                "type": "object",
                                "properties": {
                                    "admin": {
                                        "type": "boolean"
                                    },
                                    "push": {
                                        "type": "boolean"
                                    },
                                    "pull": {
                                        "type": "boolean"
                                    }
                                }
                            }
                        }
                    },
                    "source": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "owner": {
                                "type": "object",
                                "properties": {
                                    "login": {
                                        "type": "string"
                                    },
                                    "id": {
                                        "type": "number"
                                    },
                                    "avatar_url": {
                                        "type": "string"
                                    },
                                    "gravatar_id": {
                                        "type": "string"
                                    },
                                    "url": {
                                        "type": "string"
                                    },
                                    "html_url": {
                                        "type": "string"
                                    },
                                    "followers_url": {
                                        "type": "string"
                                    },
                                    "following_url": {
                                        "type": "string"
                                    },
                                    "gists_url": {
                                        "type": "string"
                                    },
                                    "starred_url": {
                                        "type": "string"
                                    },
                                    "subscriptions_url": {
                                        "type": "string"
                                    },
                                    "organizations_url": {
                                        "type": "string"
                                    },
                                    "repos_url": {
                                        "type": "string"
                                    },
                                    "events_url": {
                                        "type": "string"
                                    },
                                    "received_events_url": {
                                        "type": "string"
                                    },
                                    "type": {
                                        "type": "string"
                                    },
                                    "site_admin": {
                                        "type": "boolean"
                                    }
                                }
                            },
                            "name": {
                                "type": "string"
                            },
                            "full_name": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "private": {
                                "type": "boolean"
                            },
                            "fork": {
                                "type": "boolean"
                            },
                            "url": {
                                "type": "string"
                            },
                            "html_url": {
                                "type": "string"
                            },
                            "archive_url": {
                                "type": "string"
                            },
                            "assignees_url": {
                                "type": "string"
                            },
                            "blobs_url": {
                                "type": "string"
                            },
                            "branches_url": {
                                "type": "string"
                            },
                            "clone_url": {
                                "type": "string"
                            },
                            "collaborators_url": {
                                "type": "string"
                            },
                            "comments_url": {
                                "type": "string"
                            },
                            "commits_url": {
                                "type": "string"
                            },
                            "compare_url": {
                                "type": "string"
                            },
                            "contents_url": {
                                "type": "string"
                            },
                            "contributors_url": {
                                "type": "string"
                            },
                            "deployments_url": {
                                "type": "string"
                            },
                            "downloads_url": {
                                "type": "string"
                            },
                            "events_url": {
                                "type": "string"
                            },
                            "forks_url": {
                                "type": "string"
                            },
                            "git_commits_url": {
                                "type": "string"
                            },
                            "git_refs_url": {
                                "type": "string"
                            },
                            "git_tags_url": {
                                "type": "string"
                            },
                            "git_url": {
                                "type": "string"
                            },
                            "hooks_url": {
                                "type": "string"
                            },
                            "issue_comment_url": {
                                "type": "string"
                            },
                            "issue_events_url": {
                                "type": "string"
                            },
                            "issues_url": {
                                "type": "string"
                            },
                            "keys_url": {
                                "type": "string"
                            },
                            "labels_url": {
                                "type": "string"
                            },
                            "languages_url": {
                                "type": "string"
                            },
                            "merges_url": {
                                "type": "string"
                            },
                            "milestones_url": {
                                "type": "string"
                            },
                            "mirror_url": {
                                "type": "string"
                            },
                            "notifications_url": {
                                "type": "string"
                            },
                            "pulls_url": {
                                "type": "string"
                            },
                            "releases_url": {
                                "type": "string"
                            },
                            "ssh_url": {
                                "type": "string"
                            },
                            "stargazers_url": {
                                "type": "string"
                            },
                            "statuses_url": {
                                "type": "string"
                            },
                            "subscribers_url": {
                                "type": "string"
                            },
                            "subscription_url": {
                                "type": "string"
                            },
                            "svn_url": {
                                "type": "string"
                            },
                            "tags_url": {
                                "type": "string"
                            },
                            "teams_url": {
                                "type": "string"
                            },
                            "trees_url": {
                                "type": "string"
                            },
                            "homepage": {
                                "type": "string"
                            },
                            "language": {
                                "type": "null"
                            },
                            "forks_count": {
                                "type": "number"
                            },
                            "stargazers_count": {
                                "type": "number"
                            },
                            "watchers_count": {
                                "type": "number"
                            },
                            "size": {
                                "type": "number"
                            },
                            "default_branch": {
                                "type": "string"
                            },
                            "open_issues_count": {
                                "type": "number"
                            },
                            "has_issues": {
                                "type": "boolean"
                            },
                            "has_wiki": {
                                "type": "boolean"
                            },
                            "has_pages": {
                                "type": "boolean"
                            },
                            "has_downloads": {
                                "type": "boolean"
                            },
                            "pushed_at": {
                                "type": "string"
                            },
                            "created_at": {
                                "type": "string"
                            },
                            "updated_at": {
                                "type": "string"
                            },
                            "permissions": {
                                "type": "object",
                                "properties": {
                                    "admin": {
                                        "type": "boolean"
                                    },
                                    "push": {
                                        "type": "boolean"
                                    },
                                    "pull": {
                                        "type": "boolean"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            "name": "get_user",
            "title": "Get user",
            "description": "Get details about a GitHub user.",
            "input_schema": {
                "type": "object",
                "properties": {
                    "access_token": {
                        "type": "string",
                        "default_jsonpath": "$.auth.access_token",
                        "title": "Access token"
                    },
                    "username": {
                        "type": "string",
                        "description": "The GitHub username, e.g. \"trayio\"",
                        "title": "Username"
                    }
                },
                "$schema": "http://json-schema.org/draft-04/schema#",
                "required": [
                    "access_token",
                    "username"
                ],
                "advanced": [
                    "access_token"
                ],
                "additionalProperties": false
            },
            "output_schema": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "type": "object",
                "properties": {
                    "login": {
                        "type": "string"
                    },
                    "id": {
                        "type": "number"
                    },
                    "avatar_url": {
                        "type": "string"
                    },
                    "gravatar_id": {
                        "type": "string"
                    },
                    "url": {
                        "type": "string"
                    },
                    "html_url": {
                        "type": "string"
                    },
                    "followers_url": {
                        "type": "string"
                    },
                    "following_url": {
                        "type": "string"
                    },
                    "gists_url": {
                        "type": "string"
                    },
                    "starred_url": {
                        "type": "string"
                    },
                    "subscriptions_url": {
                        "type": "string"
                    },
                    "organizations_url": {
                        "type": "string"
                    },
                    "repos_url": {
                        "type": "string"
                    },
                    "events_url": {
                        "type": "string"
                    },
                    "received_events_url": {
                        "type": "string"
                    },
                    "type": {
                        "type": "string"
                    },
                    "site_admin": {
                        "type": "boolean"
                    },
                    "name": {
                        "type": "string"
                    },
                    "company": {
                        "type": "string"
                    },
                    "blog": {
                        "type": "string"
                    },
                    "location": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "hireable": {
                        "type": "boolean"
                    },
                    "bio": {
                        "type": "string"
                    },
                    "public_repos": {
                        "type": "number"
                    },
                    "public_gists": {
                        "type": "number"
                    },
                    "followers": {
                        "type": "number"
                    },
                    "following": {
                        "type": "number"
                    },
                    "created_at": {
                        "type": "string"
                    },
                    "updated_at": {
                        "type": "string"
                    }
                }
            }
        },
        {
            "name": "list_repository_contributors",
            "title": "List repository contributors",
            "description": "List all of the contributors to a GitHub repository.",
            "input_schema": {
                "type": "object",
                "properties": {
                    "access_token": {
                        "type": "string",
                        "default_jsonpath": "$.auth.access_token",
                        "title": "Access token"
                    },
                    "username": {
                        "type": "string",
                        "description": "The GitHub username, e.g. \"trayio\"",
                        "title": "Username"
                    },
                    "repository": {
                        "type": "string",
                        "description": "The GitHub repository, e.g. \"falafel\"",
                        "title": "Repository"
                    },
                    "show_anonymous_contributors": {
                        "type": "boolean",
                        "description": "Show anonymous contributors in results?",
                        "default": false,
                        "title": "Show anonymous contributors"
                    },
                    "page": {
                        "type": "integer",
                        "description": "The page number of items you'd like to return.",
                        "default": 1,
                        "title": "Page"
                    },
                    "per_page": {
                        "type": "integer",
                        "description": "How many items would you like to return per page? Max is 100.",
                        "default": 100,
                        "title": "Per page"
                    }
                },
                "$schema": "http://json-schema.org/draft-04/schema#",
                "required": [
                    "access_token",
                    "username",
                    "repository",
                    "page",
                    "per_page"
                ],
                "advanced": [
                    "access_token"
                ],
                "additionalProperties": false
            },
            "output_schema": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "type": "object",
                "properties": {
                    "items": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "login": {
                                    "type": "string"
                                },
                                "id": {
                                    "type": "number"
                                },
                                "avatar_url": {
                                    "type": "string"
                                },
                                "gravatar_id": {
                                    "type": "string"
                                },
                                "url": {
                                    "type": "string"
                                },
                                "html_url": {
                                    "type": "string"
                                },
                                "followers_url": {
                                    "type": "string"
                                },
                                "following_url": {
                                    "type": "string"
                                },
                                "gists_url": {
                                    "type": "string"
                                },
                                "starred_url": {
                                    "type": "string"
                                },
                                "subscriptions_url": {
                                    "type": "string"
                                },
                                "organizations_url": {
                                    "type": "string"
                                },
                                "repos_url": {
                                    "type": "string"
                                },
                                "events_url": {
                                    "type": "string"
                                },
                                "received_events_url": {
                                    "type": "string"
                                },
                                "type": {
                                    "type": "string"
                                },
                                "site_admin": {
                                    "type": "boolean"
                                },
                                "contributions": {
                                    "type": "number"
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            "name": "list_repository_forks",
            "title": "List repository forks",
            "description": "List all of the forks of a GitHub repository.",
            "input_schema": {
                "type": "object",
                "properties": {
                    "access_token": {
                        "type": "string",
                        "default_jsonpath": "$.auth.access_token",
                        "title": "Access token"
                    },
                    "username": {
                        "type": "string",
                        "description": "The GitHub username, e.g. \"trayio\"",
                        "title": "Username"
                    },
                    "repository": {
                        "type": "string",
                        "description": "The GitHub repository, e.g. \"falafel\"",
                        "title": "Repository"
                    },
                    "sort": {
                        "type": "string",
                        "title": "Sort order",
                        "description": "The sort order of forks.",
                        "default": "newest",
                        "enum": [
                            "newest",
                            "oldest",
                            "stargazers"
                        ]
                    },
                    "page": {
                        "type": "integer",
                        "description": "The page number of items you'd like to return.",
                        "default": 1,
                        "title": "Page"
                    },
                    "per_page": {
                        "type": "integer",
                        "description": "How many items would you like to return per page? Max is 100.",
                        "default": 100,
                        "title": "Per page"
                    }
                },
                "$schema": "http://json-schema.org/draft-04/schema#",
                "required": [
                    "access_token",
                    "username",
                    "repository",
                    "page",
                    "per_page"
                ],
                "advanced": [
                    "access_token"
                ],
                "additionalProperties": false
            },
            "output_schema": {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "type": "object",
                "properties": {
                    "items": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "number"
                                },
                                "owner": {
                                    "type": "object",
                                    "properties": {
                                        "login": {
                                            "type": "string"
                                        },
                                        "id": {
                                            "type": "number"
                                        },
                                        "avatar_url": {
                                            "type": "string"
                                        },
                                        "gravatar_id": {
                                            "type": "string"
                                        },
                                        "url": {
                                            "type": "string"
                                        },
                                        "html_url": {
                                            "type": "string"
                                        },
                                        "followers_url": {
                                            "type": "string"
                                        },
                                        "following_url": {
                                            "type": "string"
                                        },
                                        "gists_url": {
                                            "type": "string"
                                        },
                                        "starred_url": {
                                            "type": "string"
                                        },
                                        "subscriptions_url": {
                                            "type": "string"
                                        },
                                        "organizations_url": {
                                            "type": "string"
                                        },
                                        "repos_url": {
                                            "type": "string"
                                        },
                                        "events_url": {
                                            "type": "string"
                                        },
                                        "received_events_url": {
                                            "type": "string"
                                        },
                                        "type": {
                                            "type": "string"
                                        },
                                        "site_admin": {
                                            "type": "boolean"
                                        }
                                    }
                                },
                                "name": {
                                    "type": "string"
                                },
                                "full_name": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                },
                                "private": {
                                    "type": "boolean"
                                },
                                "fork": {
                                    "type": "boolean"
                                },
                                "url": {
                                    "type": "string"
                                },
                                "html_url": {
                                    "type": "string"
                                },
                                "archive_url": {
                                    "type": "string"
                                },
                                "assignees_url": {
                                    "type": "string"
                                },
                                "blobs_url": {
                                    "type": "string"
                                },
                                "branches_url": {
                                    "type": "string"
                                },
                                "clone_url": {
                                    "type": "string"
                                },
                                "collaborators_url": {
                                    "type": "string"
                                },
                                "comments_url": {
                                    "type": "string"
                                },
                                "commits_url": {
                                    "type": "string"
                                },
                                "compare_url": {
                                    "type": "string"
                                },
                                "contents_url": {
                                    "type": "string"
                                },
                                "contributors_url": {
                                    "type": "string"
                                },
                                "deployments_url": {
                                    "type": "string"
                                },
                                "downloads_url": {
                                    "type": "string"
                                },
                                "events_url": {
                                    "type": "string"
                                },
                                "forks_url": {
                                    "type": "string"
                                },
                                "git_commits_url": {
                                    "type": "string"
                                },
                                "git_refs_url": {
                                    "type": "string"
                                },
                                "git_tags_url": {
                                    "type": "string"
                                },
                                "git_url": {
                                    "type": "string"
                                },
                                "hooks_url": {
                                    "type": "string"
                                },
                                "issue_comment_url": {
                                    "type": "string"
                                },
                                "issue_events_url": {
                                    "type": "string"
                                },
                                "issues_url": {
                                    "type": "string"
                                },
                                "keys_url": {
                                    "type": "string"
                                },
                                "labels_url": {
                                    "type": "string"
                                },
                                "languages_url": {
                                    "type": "string"
                                },
                                "merges_url": {
                                    "type": "string"
                                },
                                "milestones_url": {
                                    "type": "string"
                                },
                                "mirror_url": {
                                    "type": "string"
                                },
                                "notifications_url": {
                                    "type": "string"
                                },
                                "pulls_url": {
                                    "type": "string"
                                },
                                "releases_url": {
                                    "type": "string"
                                },
                                "ssh_url": {
                                    "type": "string"
                                },
                                "stargazers_url": {
                                    "type": "string"
                                },
                                "statuses_url": {
                                    "type": "string"
                                },
                                "subscribers_url": {
                                    "type": "string"
                                },
                                "subscription_url": {
                                    "type": "string"
                                },
                                "svn_url": {
                                    "type": "string"
                                },
                                "tags_url": {
                                    "type": "string"
                                },
                                "teams_url": {
                                    "type": "string"
                                },
                                "trees_url": {
                                    "type": "string"
                                },
                                "homepage": {
                                    "type": "string"
                                },
                                "language": {
                                    "type": "null"
                                },
                                "forks_count": {
                                    "type": "number"
                                },
                                "stargazers_count": {
                                    "type": "number"
                                },
                                "watchers_count": {
                                    "type": "number"
                                },
                                "size": {
                                    "type": "number"
                                },
                                "default_branch": {
                                    "type": "string"
                                },
                                "open_issues_count": {
                                    "type": "number"
                                },
                                "has_issues": {
                                    "type": "boolean"
                                },
                                "has_wiki": {
                                    "type": "boolean"
                                },
                                "has_pages": {
                                    "type": "boolean"
                                },
                                "has_downloads": {
                                    "type": "boolean"
                                },
                                "pushed_at": {
                                    "type": "string"
                                },
                                "created_at": {
                                    "type": "string"
                                },
                                "updated_at": {
                                    "type": "string"
                                },
                                "permissions": {
                                    "type": "object",
                                    "properties": {
                                        "admin": {
                                            "type": "boolean"
                                        },
                                        "push": {
                                            "type": "boolean"
                                        },
                                        "pull": {
                                            "type": "boolean"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    ]
}

exports.myTestConnector = myTestConnector;