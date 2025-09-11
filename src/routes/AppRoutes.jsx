// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";

// ==========================
// Student Pages
// ==========================
import StudentDashboardHome from "@/pages/student/dashboard/DashboardHome";
import EnrolledCourses from "@/pages/student/dashboard/Courses/EnrolledCourses";
import AvailableCourses from "@/pages/student/dashboard/Courses/AvailableCourses";
import StudentAssignments from "@/pages/student/dashboard/Assessments/Assignments";
import StudentQuizzes from "@/pages/student/dashboard/Assessments/Quizzes";
import StudentLiveClasses from "@/pages/student/dashboard/Classes/LiveClasses";
import StudentRecordedClasses from "@/pages/student/dashboard/Classes/RecordedClasses";
import StudentDiscussionForum from "@/pages/student/dashboard/Engagement/DiscussionForum";
import StudentResources from "@/pages/student/dashboard/Engagement/Resources";
import StudentCertificates from "@/pages/student/dashboard/Certificates/Certificates";
import StudentProfileSettings from "@/pages/student/dashboard/ProfileSettings/ProfileSettings";

// ==========================
// Instructor Pages
// ==========================
import InstructorDashboardHome from "@/pages/instructor/dashboard/DashboardHome";
import MyCourses from "@/pages/instructor/dashboard/Courses/MyCourses";
import CourseDetails from "@/pages/instructor/dashboard/Courses/CourseDetails";
import InstructorAssignments from "@/pages/instructor/dashboard/Assessments/Assignments";
import InstructorQuizzes from "@/pages/instructor/dashboard/Assessments/Quizzes";
import QuestionBank from "@/pages/instructor/dashboard/Assessments/QuestionBank";
import InstructorLiveClasses from "@/pages/instructor/dashboard/Classes/LiveClasses";
import InstructorRecordedClasses from "@/pages/instructor/dashboard/Classes/RecordedClasses";
import InstructorDiscussionForum from "@/pages/instructor/dashboard/Engagement/DiscussionForum";
import InstructorResources from "@/pages/instructor/dashboard/Engagement/Resources";
import InstructorCertificates from "@/pages/instructor/dashboard/Administration/Certificates";
import AnalyticsReports from "@/pages/instructor/dashboard/Administration/AnalyticsReports";
import InstructorProfileSettings from "@/pages/instructor/dashboard/Profile/ProfileSettings";

// ==========================
// Admin Pages
// ==========================
import AdminDashboardHome from "@/pages/admin/dashboard/DashboardHome";
import Students from "@/pages/admin/dashboard/UserManagement/Students";
import Instructors from "@/pages/admin/dashboard/UserManagement/Instructors";
import CourseManagement from "@/pages/admin/dashboard/Courses/CourseManagement";
import AssignmentsMonitor from "@/pages/admin/dashboard/Assessments/AssignmentsMonitor";
import QuizzesMonitor from "@/pages/admin/dashboard/Assessments/QuizzesMonitor";
import LiveClassesMonitor from "@/pages/admin/dashboard/Classes/LiveClassesMonitor";
import RecordedClassesMonitor from "@/pages/admin/dashboard/Classes/RecordedClassesMonitor";
import AdminDiscussionForum from "@/pages/admin/dashboard/Engagement/DiscussionForum";
import ResourcesLibrary from "@/pages/admin/dashboard/Engagement/ResourcesLibrary";
import AdminCertificates from "@/pages/admin/dashboard/Administration/Certificates";
import ReportsAnalytics from "@/pages/admin/dashboard/Administration/ReportsAnalytics";
import AdminProfileSettings from "@/pages/admin/dashboard/Profile/ProfileSettings";

// ==========================
// SuperAdmin Pages
// ==========================
import SuperAdminDashboardHome from "@/pages/superadmin/dashboard/DashboardHome";
import ManageAdmins from "@/pages/superadmin/dashboard/AdminManagement/ManageAdmins";
import PlatformSettings from "@/pages/superadmin/dashboard/Platform/PlatformSettings";
import SecurityCompliance from "@/pages/superadmin/dashboard/Platform/SecurityCompliance";
import CertificatesControl from "@/pages/superadmin/dashboard/Platform/CertificatesControl";
import UserManagement from "@/pages/superadmin/dashboard/Users/UserManagement";
import CourseOversight from "@/pages/superadmin/dashboard/Courses/CourseOversight";
import RevenuePayments from "@/pages/superadmin/dashboard/Finance/RevenuePayments";
import Billing from "@/pages/superadmin/dashboard/Finance/Billing";
import SuperAdminReportsAnalytics from "@/pages/superadmin/dashboard/Analytics/ReportsAnalytics";
import SuperAdminProfileSettings from "@/pages/superadmin/dashboard/Profile/ProfileSettings";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Redirect root "/" to student dashboard */}
      <Route path="/" element={<Navigate to="/student/dashboard" replace />} />

      {/* ================= STUDENT ================= */}
      <Route path="/student/dashboard" element={<DashboardLayout role="student" />}>
        <Route index element={<StudentDashboardHome />} />
        <Route path="courses/enrolled" element={<EnrolledCourses />} />
        <Route path="courses/available" element={<AvailableCourses />} />
        <Route path="assessments/assignments" element={<StudentAssignments />} />
        <Route path="assessments/quizzes" element={<StudentQuizzes />} />
        <Route path="classes/live" element={<StudentLiveClasses />} />
        <Route path="classes/recorded" element={<StudentRecordedClasses />} />
        <Route path="engagement/discussion" element={<StudentDiscussionForum />} />
        <Route path="engagement/resources" element={<StudentResources />} />
        <Route path="certificates" element={<StudentCertificates />} />
        <Route path="profile" element={<StudentProfileSettings />} />
      </Route>

      {/* ================= INSTRUCTOR ================= */}
      <Route path="/instructor/dashboard" element={<DashboardLayout role="instructor" />}>
        <Route index element={<InstructorDashboardHome />} />
        <Route path="courses/my-courses" element={<MyCourses />} />
        <Route path="courses/details" element={<CourseDetails />} />
        <Route path="assessments/assignments" element={<InstructorAssignments />} />
        <Route path="assessments/quizzes" element={<InstructorQuizzes />} />
        <Route path="assessments/question-bank" element={<QuestionBank />} />
        <Route path="classes/live" element={<InstructorLiveClasses />} />
        <Route path="classes/recorded" element={<InstructorRecordedClasses />} />
        <Route path="engagement/discussion" element={<InstructorDiscussionForum />} />
        <Route path="engagement/resources" element={<InstructorResources />} />
        <Route path="administration/certificates" element={<InstructorCertificates />} />
        <Route path="administration/reports" element={<AnalyticsReports />} />
        <Route path="profile/settings" element={<InstructorProfileSettings />} />
      </Route>

      {/* ================= ADMIN ================= */}
      <Route path="/admin/dashboard" element={<DashboardLayout role="admin" />}>
        <Route index element={<AdminDashboardHome />} />
        <Route path="users/students" element={<Students />} />
        <Route path="users/instructors" element={<Instructors />} />
        <Route path="courses/manage" element={<CourseManagement />} />
        <Route path="assessments/assignments" element={<AssignmentsMonitor />} />
        <Route path="assessments/quizzes" element={<QuizzesMonitor />} />
        <Route path="classes/live" element={<LiveClassesMonitor />} />
        <Route path="classes/recorded" element={<RecordedClassesMonitor />} />
        <Route path="engagement/discussion" element={<AdminDiscussionForum />} />
        <Route path="engagement/resources" element={<ResourcesLibrary />} />
        <Route path="administration/certificates" element={<AdminCertificates />} />
        <Route path="administration/reports" element={<ReportsAnalytics />} />
        <Route path="profile/settings" element={<AdminProfileSettings />} />
      </Route>

      {/* ================= SUPERADMIN ================= */}
      <Route path="/superadmin/dashboard" element={<DashboardLayout role="superadmin" />}>
        <Route index element={<SuperAdminDashboardHome />} />
        <Route path="admins/manage" element={<ManageAdmins />} />
        <Route path="platform/settings" element={<PlatformSettings />} />
        <Route path="platform/security" element={<SecurityCompliance />} />
        <Route path="platform/certificates" element={<CertificatesControl />} />
        <Route path="users/manage" element={<UserManagement />} />
        <Route path="courses/oversight" element={<CourseOversight />} />
        <Route path="finance/revenue" element={<RevenuePayments />} />
        <Route path="finance/billing" element={<Billing />} />
        <Route path="analytics/reports" element={<SuperAdminReportsAnalytics />} />
        <Route path="profile/settings" element={<SuperAdminProfileSettings />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/student/dashboard" replace />} />
    </Routes>
  );
}
