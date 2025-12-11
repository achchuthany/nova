import { promises as fs } from 'fs';
import path from 'path';

/**
 * Fetches data from a JSON file
 * @param {string} filename - Name of the JSON file (without path)
 * @returns {Promise<Object>} Parsed JSON data
 */
async function fetchDataFromFile(filename) {
  try {
    const filePath = path.join(process.cwd(), 'data', filename);
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error fetching data from ${filename}:`, error);
    return null;
  }
}

/**
 * Fetches profile information
 * @returns {Promise<Object>} Profile data
 */
export async function getProfile() {
  return await fetchDataFromFile('profile.json');
}

/**
 * Fetches all projects
 * @returns {Promise<Array>} Array of project objects
 */
export async function getAllProjects() {
  const data = await fetchDataFromFile('projects.json');
  return data?.projects || [];
}

/**
 * Fetches single project by slug
 * @param {string} slug - Project identifier
 * @returns {Promise<Object|null>} Project object or null
 */
export async function getProjectBySlug(slug) {
  const projects = await getAllProjects();
  return projects.find(project => project.slug === slug) || null;
}

/**
 * Fetches all skills
 * @returns {Promise<Array>} Array of skill categories
 */
export async function getSkills() {
  const data = await fetchDataFromFile('skills.json');
  return data?.skills || [];
}

/**
 * Fetches experience data
 * @returns {Promise<Array>} Array of experience objects
 */
export async function getExperience() {
  const data = await fetchDataFromFile('experience.json');
  return data?.experience || [];
}

/**
 * Fetches education data
 * @returns {Promise<Object>} Education and certifications
 */
export async function getEducation() {
  return await fetchDataFromFile('education.json');
}

/**
 * Fetches all courses
 * @returns {Promise<Array>} Array of course objects
 */
export async function getCourses() {
  const data = await fetchDataFromFile('courses.json');
  return data?.courses || [];
}

/**
 * Fetches testimonials
 * @returns {Promise<Array>} Array of testimonial objects
 */
export async function getTestimonials() {
  const data = await fetchDataFromFile('testimonials.json');
  return data?.testimonials || [];
}

/**
 * Fetches blog posts
 * @returns {Promise<Array>} Array of blog post objects
 */
export async function getBlogPosts() {
  const data = await fetchDataFromFile('blog-posts.json');
  return data?.posts || [];
}

/**
 * Fetches featured projects (first 3)
 * @returns {Promise<Array>} Array of featured project objects
 */
export async function getFeaturedProjects() {
  const projects = await getAllProjects();
  return projects.slice(0, 3);
}

/**
 * Fetches latest blog posts
 * @param {number} count - Number of posts to fetch
 * @returns {Promise<Array>} Array of latest blog post objects
 */
export async function getLatestBlogPosts(count = 3) {
  const posts = await getBlogPosts();
  return posts.slice(0, count);
}
