// TechLink - Main Entry Point

interface User {
  id: string;
  username: string;
  email: string;
  role: 'student' | 'mentor' | 'admin';
}

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: number;
}

class TechLinkPlatform {
  private users: User[] = [];
  private courses: Course[] = [];

  constructor() {
    console.log('🔗 TechLink Platform initialized');
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log(`User added: ${user.username}`);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
    console.log(`Course added: ${course.title}`);
  }

  listUsers(): User[] {
    return this.users;
  }

  listCourses(): Course[] {
    return this.courses;
  }
}

// Initialize the platform
const platform = new TechLinkPlatform();
platform.addUser({
  id: '1',
  username: 'john_doe',
  email: 'john@example.com',
  role: 'student'
});

platform.addCourse({
  id: '1',
  title: 'TypeScript Fundamentals',
  description: 'Learn TypeScript from scratch',
  instructor: 'Jane Smith',
  duration: 40
});

console.log('Active users:', platform.listUsers().length);
console.log('Available courses:', platform.listCourses().length);
