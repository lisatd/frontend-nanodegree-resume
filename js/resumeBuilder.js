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
    'welcomeMessage': 'Full time software and web developer with a focus on front end web applications.',
    'skills': ['HTML', 'CSS', 'JavaScript', 'C#', 'Java'],
    'biopic': 'images/biopic.png',
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
        'location': 'Stony Brook, NY',
        'degree': 'B.S.',
        'majors': ['Computer Science'],
        'dates': 2013,
        'url': 'http://www.stonybrook.edu/'
    }],
    'onlineCourses': [{
        'title': 'Nanodegree',
        'school': 'Udacity',
        'date': 2016,
        'url': 'https://www.udacity.com/'
    }],
    'display': function() {
        var $education = $('#education');

        this.schools.forEach(function(school) {
            var $educationEntry = $(HTMLschoolStart);
            $education.append($educationEntry);

            var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
            formattedSchoolName = formattedSchoolName.replace('#', school.url);
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            $educationEntry.append(formattedSchoolName + formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
            $educationEntry.append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
            $educationEntry.append(formattedSchoolLocation);

            school.majors.forEach(function(major) {
                var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', major);
                $educationEntry.append(formattedSchoolMajor);
            });
        });

        $education.append(HTMLonlineClasses);

        this.onlineCourses.forEach(function(course) {
            var $educationEntry = $(HTMLschoolStart);
            $education.append($educationEntry);

            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', course.title);
            formattedOnlineTitle = formattedOnlineTitle.replace('#', course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school);
            $educationEntry.append(formattedOnlineTitle + formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace('%data%', course.date);
            $educationEntry.append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace('%data%', course.url);
            formattedOnlineURL = formattedOnlineURL.replace('#', course.url);
            $educationEntry.append(formattedOnlineURL);
        });
    }
};

var work = {
    'jobs': [{
        'employer': 'Aptima, Inc.',
        'title': 'Software Engineer II',
        'location': 'Woburn, MA',
        'dates': 'Aug 2013 - Present',
        'description': 'Built multiple front end web applications on various projects. Main technologies used are AngularJS, ' +
        'D3.js, Twitter Bootstrap, BreezeJS, REST api, and Microsoft SQL. Web applications vary from performance dashboards, ' +
        'training interfaces, and a mobile-friendly hospital patient portal. Involved in development of Performance Measurement ' +
        'product, including building plugins and testing tools built on C#.'
    }, {
        'employer': 'XCL Business Products',
        'title': 'Programmer/IT - Intern',
        'location': 'Hauppauge, NY',
        'dates': 'Feb 2013 - May 2013',
        'description': 'Researched and reported third party software for Xerox products. Researched and began development of ' +
        'Xerox application based on SDK.'
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
        'title': 'Udacity P1: Porfolio Mockup to HTML',
        'dates': 'Sept 2015',
        'description': 'Project 1 of Udacity Front End Nanodegree Program. Turned a pdf mockup into HTML/CSS page.',
        'images': ['images/project1.png']
    }, {
        'title': 'Udacity P2: Online Resume',
        'dates': 'Oct 2015',
        'description': 'Project 2 of Udacity Front End Nanodegree Program. An online resume built with jQuery and Google api.',
        'images': ['images/project2.png', 'images/project2-2.png']
    }],
    'display': function() {
        this.projects.forEach(function(project) {
            var $projectEntry = $(HTMLprojectStart);
            $('#projects').append($projectEntry);

            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
            $projectEntry.append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
            $projectEntry.append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
            $projectEntry.append(formattedProjectDescription);

            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
                $projectEntry.append(formattedProjectImage);
            });
        })
    }
};

function addGoogleMaps() {
    $('#mapDiv').append(googleMap);
}

bio.display();
work.display();
projects.display();
education.display();
addGoogleMaps();
