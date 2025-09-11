// src/config/menuConfig.js

export const MENU_CONFIG = {
  student: [
    { label: "Dashboard", path: "/student/dashboard" },

    {
      label: "Courses",
      children: [
        { label: "Enrolled Courses", path: "/student/dashboard/courses/enrolled" },
        { label: "Available Courses", path: "/student/dashboard/courses/available" },
      ],
    },

    {
      label: "Assessments",
      children: [
        { label: "Assignments", path: "/student/dashboard/assessments/assignments" },
        { label: "Quizzes", path: "/student/dashboard/assessments/quizzes" },
      ],
    },

    {
      label: "Classes",
      children: [
        { label: "Live Classes", path: "/student/dashboard/classes/live" },
        { label: "Recorded Classes", path: "/student/dashboard/classes/recorded" },
      ],
    },

    {
      label: "Engagement",
      children: [
        { label: "Discussion Forum", path: "/student/dashboard/engagement/discussion" },
        { label: "Resources", path: "/student/dashboard/engagement/resources" },
      ],
    },

    { label: "Certificates", path: "/student/dashboard/certificates" },
    { label: "Profile Settings", path: "/student/dashboard/profile" },
  ],

  instructor: [
    { label: "Dashboard", path: "/instructor/dashboard" },

    {
      label: "Courses",
      children: [
        { label: "My Courses", path: "/instructor/dashboard/courses/my-courses" },
        { label: "Course Details", path: "/instructor/dashboard/courses/details" },
      ],
    },

    {
      label: "Assessments",
      children: [
        { label: "Assignments", path: "/instructor/dashboard/assessments/assignments" },
        { label: "Quizzes", path: "/instructor/dashboard/assessments/quizzes" },
        { label: "Question Bank", path: "/instructor/dashboard/assessments/question-bank" },
      ],
    },

    {
      label: "Classes",
      children: [
        { label: "Live Classes", path: "/instructor/dashboard/classes/live" },
        { label: "Recorded Classes", path: "/instructor/dashboard/classes/recorded" },
      ],
    },

    {
      label: "Engagement",
      children: [
        { label: "Discussion Forum", path: "/instructor/dashboard/engagement/discussion" },
        { label: "Resources", path: "/instructor/dashboard/engagement/resources" },
      ],
    },

    {
      label: "Administration",
      children: [
        { label: "Certificates", path: "/instructor/dashboard/administration/certificates" },
        { label: "Analytics Reports", path: "/instructor/dashboard/administration/reports" },
      ],
    },

    {
      label: "Profile",
      children: [
        { label: "Profile Settings", path: "/instructor/dashboard/profile/settings" },
      ],
    },
  ],

  admin: [
    { label: "Dashboard", path: "/admin/dashboard" },

    {
      label: "User Management",
      children: [
        { label: "Students", path: "/admin/dashboard/users/students" },
        { label: "Instructors", path: "/admin/dashboard/users/instructors" },
      ],
    },

    {
      label: "Courses",
      children: [
        { label: "Course Management", path: "/admin/dashboard/courses/manage" },
      ],
    },

    {
      label: "Assessments",
      children: [
        { label: "Assignments Monitor", path: "/admin/dashboard/assessments/assignments" },
        { label: "Quizzes Monitor", path: "/admin/dashboard/assessments/quizzes" },
      ],
    },

    {
      label: "Classes",
      children: [
        { label: "Live Classes Monitor", path: "/admin/dashboard/classes/live" },
        { label: "Recorded Classes Monitor", path: "/admin/dashboard/classes/recorded" },
      ],
    },

    {
      label: "Engagement",
      children: [
        { label: "Discussion Forum", path: "/admin/dashboard/engagement/discussion" },
        { label: "Resources Library", path: "/admin/dashboard/engagement/resources" },
      ],
    },

    {
      label: "Administration",
      children: [
        { label: "Certificates", path: "/admin/dashboard/administration/certificates" },
        { label: "Reports & Analytics", path: "/admin/dashboard/administration/reports" },
      ],
    },

    {
      label: "Profile",
      children: [
        { label: "Profile Settings", path: "/admin/dashboard/profile/settings" },
      ],
    },
  ],

  superadmin: [
    { label: "Dashboard", path: "/superadmin/dashboard" },

    {
      label: "Admin Management",
      children: [
        { label: "Manage Admins", path: "/superadmin/dashboard/admins/manage" },
      ],
    },

    {
      label: "Platform",
      children: [
        { label: "Platform Settings", path: "/superadmin/dashboard/platform/settings" },
        { label: "Security Compliance", path: "/superadmin/dashboard/platform/security" },
        { label: "Certificates Control", path: "/superadmin/dashboard/platform/certificates" },
      ],
    },

    {
      label: "Users",
      children: [
        { label: "User Management", path: "/superadmin/dashboard/users/manage" },
      ],
    },

    {
      label: "Courses",
      children: [
        { label: "Course Oversight", path: "/superadmin/dashboard/courses/oversight" },
      ],
    },

    {
      label: "Finance",
      children: [
        { label: "Revenue & Payments", path: "/superadmin/dashboard/finance/revenue" },
        { label: "Billing", path: "/superadmin/dashboard/finance/billing" },
      ],
    },

    {
      label: "Analytics",
      children: [
        { label: "Reports & Analytics", path: "/superadmin/dashboard/analytics/reports" },
      ],
    },

    {
      label: "Profile",
      children: [
        { label: "Profile Settings", path: "/superadmin/dashboard/profile/settings" },
      ],
    },
  ],
};
