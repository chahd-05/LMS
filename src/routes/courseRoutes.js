const express = require("express")

const { getPublishedCourse, getCourseById, createCourse, updateCourse, deleteCourse } = require("../controllers/courseController")

const router = express.Router()

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Get published courses
 *     tags: [Courses]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter courses by category
 *       - in: query
 *         name: level
 *         schema:
 *           type: string
 *           enum: [beginner, intermediate, advanced]
 *         description: Filter courses by level
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         description: Search course titles
 *     responses:
 *       200:
 *         description: List of published courses
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Course'
 */
router.get("/", getPublishedCourse)

/**
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *     responses:
 *       200:
 *         description: Course found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Course'
 *       404:
 *         description: Course not found
 */
router.get("/:id", getCourseById)

/**
 * @swagger
 * /api/courses:
 *   post:
 *     summary: Create a course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, description, category, level, status]
 *             properties:
 *               title:
 *                 type: string
 *                 example: Introduction to JavaScript
 *               description:
 *                 type: string
 *                 example: Learn the basics of JavaScript.
 *               category:
 *                 type: string
 *                 example: Programming
 *               level:
 *                 type: string
 *                 enum: [beginner, intermediate, advanced]
 *               status:
 *                 type: string
 *                 enum: [draft, published]
 *               publishedAt:
 *                 type: string
 *                 format: date-time
 *                 nullable: true
 *     responses:
 *       201:
 *         description: Course created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Course'
 */
router.post("/", createCourse)

/**
 * @swagger
 * /api/courses:
 *   put:
 *     summary: Update a course
 *     description: The current route does not include a course ID, although the update handler expects one.
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: Course updated
 *       404:
 *         description: Course not found
 */
router.put("/", updateCourse)

/**
 * @swagger
 * /api/courses:
 *   delete:
 *     summary: Delete a course
 *     description: The current route does not include a course ID, although the delete handler expects one.
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: Course deleted
 *       404:
 *         description: Course not found
 */
router.delete("/", deleteCourse)

module.exports = router