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
        var $header = $('#header'), $topContacts = $('#topContacts'), $footerContacts = $('#footerContacts');

        var formattedHeaderRole = HTMLheaderRole.replace('%data%', this.role);
        $header.prepend(formattedHeaderRole);

        var formattedHeaderName = HTMLheaderName.replace('%data%', this.name);
        $header.prepend(formattedHeaderName);

        var formattedMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
        $topContacts.append(formattedMobile);
        $footerContacts.append(formattedMobile);

        var formattedEmail = HTMLemail.replace('%data%', this.contacts.email);
        $topContacts.append(formattedEmail);
        $footerContacts.append(formattedEmail);

        var formattedGithub = HTMLgithub.replace('%data%', this.contacts.github);
        $topContacts.append(formattedGithub);
        $footerContacts.append(formattedGithub);

        var formattedLocation = HTMLlocation.replace('%data%', this.contacts.location);
        $topContacts.append(formattedLocation);
        $footerContacts.append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace('%data%', this.biopic);
        $header.append(formattedBioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
        $header.append(formattedWelcomeMsg);

        $header.append(HTMLskillsStart);

        var $skills = $('#skills');
        this.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace('%data%', skill);
            $skills.append(formattedSkills);
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
    }, {
        'employer': 'Aptima, Inc.',
        'title': 'Software Engineer',
        'location': 'Woburn, MA',
        'dates': 'Aug 2013 - Present',
        'description': 'change'
    }],
    'display': function() {
        this.jobs.forEach(function(job) {
            var $workEntry = $(HTMLworkStart);
            $('#workExperience').append($workEntry);

            var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
            $workEntry.append(formattedWorkEmployer + formattedWorkTitle);

            var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
            $workEntry.append(formattedWorkDates);

            var formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
            $workEntry.append(formattedWorkLocation);

            var formattedWorkDescription = HTMLworkDescription.replace('%data%', job.description);
            $workEntry.append(formattedWorkDescription);
        })
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