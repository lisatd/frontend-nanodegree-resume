var bio = {
    'name': 'Lisa T. Dang',
    'role': 'Software Engineer II',
    'contacts': {
        'mobile': '603-479-8883',
        'email': 'lisatdang@outlook.com',
        'github': 'https://github.com/lisatd',
        'twitter': null,
        'location': 'Boston, MA'
    },
    'welcomeMessage': 'change',
    'skills': ['HTML', 'CSS', 'JavaScript'],
    'biopic': 'images/fry.jpg',
    'display': function () {
        var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(formattedHeaderRole);

        var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
        $('#header').prepend(formattedHeaderName);

        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);
        $('#footerContacts').append(formattedMobile);

        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#topContacts').append(formattedEmail);
        $('#footerContacts').append(formattedEmail);

        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        $('#topContacts').append(formattedGithub);
        $('#footerContacts').append(formattedGithub);

        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts').append(formattedLocation);
        $('#footerContacts').append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
        $('#header').append(formattedBioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedWelcomeMsg);

        $('#header').append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkills);
        });
    }
};

var education = {
    'schools': [{
        'name': 'Stony Brook University',
        'location': 'Stony Brook, NY, USA',
        'degree': 'B.S. in Computer Science',
        'majors': ['Computer Science'],
        'dates': 2013,
        'url': 'change'
    }],
    'onlineCourses': [{
        'title': 'Nanodegree',
        'school': 'Udacity',
        'date': 2016,
        'url': 'change'
    }],
    'display': function() {

    }
};

var work = {
    'jobs': [{
        'employer': 'Aptima, Inc.',
        'title': 'Software Engineer',
        'location': 'Woburn, MA',
        'dates': 'Aug 2013 - Present',
        'description': 'change'
    }],
    'display': function() {

    }
};

var projects = {
    'projects': [{
        'title': 'change',
        'dates': 'change',
        'description': 'change',
        'images': ['change']
    }],
    'display': function() {

    }
};

bio.display();