<template>
  <div class="sidebar-wrapper" :class="{ 'is-collapsed': isSidebarCollapsed }">
    <!-- Collapse Toggle Button -->
    <button class="toggle-btn" @click="isSidebarCollapsed = !isSidebarCollapsed" :title="isSidebarCollapsed ? 'Expand Navigation' : 'Collapse Navigation'">
      <span class="arrow">{{ isSidebarCollapsed ? '→' : '←' }}</span>
    </button>

    <!-- Sidebar Navigation Content -->
    <div class="sidebar-content" v-show="!isSidebarCollapsed">
      <div class="sidebar-header">
        <h3>Course Navigator</h3>
      </div>

      <nav class="navigation-tree">
        <!-- 1. COURSE LAYER -->
        <div v-for="course in navigationData" :key="course.id" class="tree-node course-node">
          <div class="node-header" @click="toggleNode('course', course.id)" :class="{ 'is-active': activeCourseId === course.id }">
            <span class="icon">🎓</span>
            <span class="node-title">{{ course.name }}</span>
            <span class="chevron" :class="{ 'rotated': expandedCourses.includes(course.id) }">▼</span>
          </div>

          <!-- 2. SUBJECT LAYER -->
          <div v-show="expandedCourses.includes(course.id)" class="node-children">
            <div v-for="subject in course.subjects" :key="subject.id" class="tree-node subject-node">
              <div class="node-header" @click="toggleNode('subject', subject.id)" :class="{ 'is-active': activeSubjectId === subject.id }">
                <span class="icon">📘</span>
                <span class="node-title">{{ subject.name }}</span>
                <span class="chevron" :class="{ 'rotated': expandedSubjects.includes(subject.id) }">▼</span>
              </div>

              <!-- 3. QUIZ LAYER -->
              <div v-show="expandedSubjects.includes(subject.id)" class="node-children leaf-nodes">
                <div 
                  v-for="quiz in subject.quizzes" 
                  :key="quiz.id" 
                  class="quiz-item"
                  :class="{ 'is-selected': currentQuizId === quiz.id }"
                  @click="selectQuiz(quiz.id)"
                >
                  <span class="status-dot" :class="quiz.status"></span>
                  <span class="quiz-title">{{ quiz.title }}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import App from '@/App.vue'
// Sidebar structure control state
const isSidebarCollapsed = ref(false)
const expandedCourses = ref([])
const expandedSubjects = ref([])

// Active selection styling tracking
const activeCourseId = ref(null)
const activeSubjectId = ref(null)
const currentQuizId = ref('js-basics-1') // Example pre-selected item from your snapshot context

// Mock structure data matching course -> subject -> quiz hierarchy
const navigationData = ref([
  {
    id: 'web-dev',
    name: 'Web Development Masterclass',
    subjects: [
      {
        id: 'javascript',
        name: 'JavaScript Essentials',
        quizzes: [
          { id: 'js-basics-1', title: 'Quiz 1: Closures & Timing', status: 'active' },
          { id: 'js-basics-2', title: 'Quiz 2: Promises & Async', status: 'unlocked' },
          { id: 'js-basics-3', title: 'Quiz 3: Event Loop Basics', status: 'locked' }
        ]
      },
      {
        id: 'vue-framework',
        name: 'Vue.js 3 Basics',
        quizzes: [
          { id: 'vue-1', title: 'Quiz 1: Reactivity Root', status: 'locked' }
        ]
      }
    ]
  },
  {
    id: 'computer-science',
    name: 'Computer Science 101',
    subjects: [
      {
        id: 'algorithms',
        name: 'Data Structures',
        quizzes: [
          { id: 'algo-1', title: 'Quiz 1: Array Mechanics', status: 'unlocked' }
        ]
      }
    ]
  }
])

// Handles toggling accordion lists smoothly
const toggleNode = (type, id) => {
  if (type === 'course') {
    activeCourseId.value = id
    const index = expandedCourses.value.indexOf(id)
    if (index > -1) expandedCourses.value.splice(index, 1)
    else expandedCourses.value.push(id)
  } else if (type === 'subject') {
    activeSubjectId.value = id
    const index = expandedSubjects.value.indexOf(id)
    if (index > -1) expandedSubjects.value.splice(index, 1)
    else expandedSubjects.value.push(id)
  }
}

// Triggers action when user selects a quiz leaf node
const selectQuiz = (quizId) => {
  currentQuizId.value = quizId
  console.log(`Navigating view to load structural component configuration for: ${quizId}`)
}
</script>

<style scoped>
/* Main Wrapper: Fits left alongside your current testing canvas layout */
.sidebar-wrapper {
  width: 280px;
  height: calc(100vh - 40px); /* Adjusts perfectly underneath your dark red top bar */
  background-color: #FDFDFD;
  border-right: 1px solid #E5E7EB;
  position: relative;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.02);
}

/* Collapsed layout modifiers */
.sidebar-wrapper.is-collapsed {
  width: 15px;
}

/* Float Floating Action Toggle Arrow Trigger button */
.toggle-btn {
  position: absolute;
  top: 15px;
  right: -12px;
  width: 24px;
  height: 24px;
  background-color: #800020; /* Deep Burgundy Red accent pulled from top header banner image */
  color: #FFFFFF;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.sidebar-content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 1.2rem 1rem;
  border-bottom: 1px solid #F3F4F6;
}

.sidebar-header h3 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.navigation-tree {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

/* Shared structural design nodes */
.node-header {
  display: flex;
  align-items: center;
  padding: 0.6rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;
}

.node-header:hover {
  background-color: #F3F4F6;
}

.node-header.is-active {
  background-color: rgba(128, 0, 32, 0.04);
}

.icon {
  margin-right: 0.6rem;
  font-size: 1rem;
}

.node-title {
  flex: 1;
  font-size: 0.88rem;
  font-weight: 500;
  color: #4B5563;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chevron {
  font-size: 0.65rem;
  color: #9CA3AF;
  transition: transform 0.2s ease;
}

.chevron.rotated {
  transform: rotate(180deg);
}

/* Nesting layout padding indents rules */
.node-children {
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 0.1rem;
}

/* Quizzes (Leaf Items) Styles */
.leaf-nodes {
  padding-left: 1rem;
  border-left: 1px dashed #D1D5DB;
  margin-left: 0.6rem;
}

.quiz-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.7rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.quiz-item:hover {
  background-color: #F9FAFB;
}

.quiz-item.is-selected {
  background-color: rgba(128, 0, 32, 0.08);
  font-weight: 600;
}

.quiz-item.is-selected .quiz-title {
  color: #800020;
}

.quiz-title {
  font-size: 0.82rem;
  color: #6B7280;
}

/* Interactive Status dots indicator map markers */
.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 0.6rem;
  flex-shrink: 0;
}
.status-dot.active { background-color: #10B981; }   /* Green */
.status-dot.unlocked { background-color: #3B82F6; } /* Blue */
.status-dot.locked { background-color: #9CA3AF; }   /* Gray */
</style>
