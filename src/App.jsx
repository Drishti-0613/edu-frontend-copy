// src/App.jsx
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

// Student Dashboard Pages
import DashboardHome from "./pages/student/dashboard/DashboardHome";
import EnrolledCourses from "./pages/student/dashboard/Courses/EnrolledCourses";
import AvailableCourses from "./pages/student/dashboard/Courses/AvailableCourses";
import Assignments from "./pages/student/dashboard/Assessments/Assignments";
import Quizzes from "./pages/student/dashboard/Assessments/Quizzes";
import LiveClasses from "./pages/student/dashboard/Classes/LiveClasses";
import RecordedClasses from "./pages/student/dashboard/Classes/RecordedClasses";
import DiscussionForum from "./pages/student/dashboard/DiscussionForum";
import Certificates from "./pages/student/dashboard/Certificates";
import Resources from "./pages/student/dashboard/Resources";
import ProfileSettings from "./pages/student/dashboard/ProfileSettings";

export default function App() {
  return (
    <Routes>
      {/* Student Dashboard Preview */}
      <Route path="/*" element={<DashboardLayout role="student" />}>
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="courses/enrolled" element={<EnrolledCourses />} />
        <Route path="courses/available" element={<AvailableCourses />} />
        <Route path="assessments/assignments" element={<Assignments />} />
        <Route path="assessments/quizzes" element={<Quizzes />} />
        <Route path="classes/live" element={<LiveClasses />} />
        <Route path="classes/recorded" element={<RecordedClasses />} />
        <Route path="discussionforum" element={<DiscussionForum />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="resources" element={<Resources />} />
        <Route path="profile" element={<ProfileSettings />} />
      </Route>
    </Routes>
  );
}
