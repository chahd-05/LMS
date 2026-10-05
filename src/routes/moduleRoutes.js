const express = require("express")

const { getModulesByCourse } = require("../controllers/moduleController")

const router = express.Router()

/**
 * @swagger
 * /api/courses/{courseId}/modules:
 *   get:
 *     summary: Get modules for a course
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the course
 *     responses:
 *       200:
 *         description: List of course modules, ordered by module order
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
 *                     $ref: '#/components/schemas/Module'
 */
router.get("/:courseId/modules", getModulesByCourse)

module.exports = router