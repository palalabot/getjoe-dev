// Shared JSDoc types for the content in `_data/`. Checked by `pnpm typecheck`.
// This file only holds type definitions, so it exports nothing at runtime.

/**
 * @typedef {object} Project
 * @property {"project" | "hobby"} category "project" for sites with a link to visit, "hobby" for interests and side pursuits.
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 * @property {string} [link] Internal path ("/bayanihan") or full external URL. Omit when there is nothing to link to.
 */

/**
 * @typedef {object} ResumeLink
 * @property {string} label
 * @property {string} url
 */

/**
 * @typedef {object} SkillGroup
 * @property {string} category
 * @property {string[]} items
 */

/**
 * @typedef {object} Job
 * @property {string} company
 * @property {string} role
 * @property {string} start
 * @property {string} end "Present" for the current job.
 * @property {string[]} highlights
 * @property {string[]} skills
 */

/**
 * @typedef {object} Education
 * @property {string} degree
 * @property {string} school
 */

/**
 * Shape of `resume.json`. It is served publicly, so no phone or home address.
 * @typedef {object} Resume
 * @property {string} name
 * @property {string} title
 * @property {string} location
 * @property {string} email
 * @property {ResumeLink[]} links
 * @property {string} summary
 * @property {SkillGroup[]} skills
 * @property {Job[]} experience
 * @property {string} earlier
 * @property {Education[]} education
 * @property {string[]} speaking
 */

export {};
