// Publications shown on the homepage, newest first. "Maks Sorokin" is set in bold wherever it appears.
// `summary` is HTML so a summary can carry inline links.

export interface Publication {
  year: number;
  title: string;
  href: string;
  authors?: string;
  venue?: string;
  honor?: string; // e.g. oral / spotlight selection, shown under the venue
  summary: string;
  media: { video?: string; image?: string; poster?: string; fit?: 'cover' | 'contain' };
  links: { label: string; href: string }[];
  archive?: boolean; // shown under "earlier projects"
}

const V = '/assets/videos';
const P = '/assets/videos/posters';

export const publications: Publication[] = [
  {
    year: 2026,
    title: 'Learning Loco-Manipulation From SMPC Demonstrations With Sparse Offline-to-Online RL',
    href: 'https://pages.rai-inst.com/smpc2rl/',
    authors: "Martin Schuck, Maks Sorokin, Simone Manni, Duy Ta, Angela P. Schoellig, Marco Hutter, Simon Le Cleac'h, Jan Brüdigam",
    venue: 'Conference on Robot Learning (CoRL) 2026',
    honor: 'selected for a spotlight (top 3.4% of 2,094 submissions)',
    summary: 'Sample-based MPC in simulation acts as an automated expert whose offline data solves exploration, so off-policy RL learns loco-manipulation from sparse rewards alone. The policies surpass their optimal-control teacher and transfer to Spot and a Unitree G1 humanoid.',
    media: { video: `${V}/smpc2rl.mp4`, poster: `${P}/smpc2rl.jpg` },
    links: [
      { label: 'project page', href: 'https://pages.rai-inst.com/smpc2rl/' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2608.12063' },
      { label: 'code', href: 'https://github.com/rai-opensource/judo' },
    ],
  },
  {
    year: 2026,
    title: 'SUMO: Dynamic and Generalizable Whole-Body Loco-Manipulation',
    href: 'https://sumo.rai-inst.com/',
    authors: "John Z. Zhang, Maks Sorokin*, Jan Brüdigam*, Brandon Hung*, Stephen Phillips, Dmitry Yershov, Farzad Niroui, Tong Zhao, Leonor Fermoselle, Xinghao Zhu, Chao Cao, Duy Ta, Tao Pang, Jiuguang Wang, Preston Culbertson, Zachary Manchester, Simon Le Cléac'h",
    venue: 'IEEE Transactions on Robot Learning (T-RL) 2026',
    summary: 'A sim-to-real approach that enables legged robots to dynamically manipulate large and heavy objects with whole-body dexterity. We combine pre-trained whole-body policies with sample-based planning in a hierarchical controller that generalizes to diverse objects and tasks without retraining — demonstrated on Spot uprighting a 15kg tire and dragging barriers larger than itself, as well as humanoid simulations.',
    media: { video: `${V}/sumo.mp4`, poster: `${P}/sumo.jpg` },
    links: [
      { label: 'project page', href: 'https://sumo.rai-inst.com/' },
      { label: 'video', href: 'https://youtu.be/3DKkiA_ZOfQ' },
      { label: 'code', href: 'https://github.com/rai-opensource/sumo' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2604.08508' },
    ],
  },
  {
    year: 2026,
    title: 'AdaptManip: Learning Adaptive Whole-Body Object Lifting and Delivery with Online Recurrent State Estimation',
    href: 'https://morganbyrd03.github.io/adaptmanip/',
    authors: 'Morgan Byrd, Donghoon Baek, Kartik Garg, Hyunyoung Jung, Daesol Cho, Maks Sorokin, Robert Wright, Sehoon Ha',
    venue: 'Under review (RA-L), 2026',
    summary: 'An autonomous framework that enables humanoid robots to navigate, grasp, lift, and deliver objects with whole-body coordination. A recurrent pose estimator maintains robust state under noisy vision, and the policy generalizes across varying object shapes and masses with adaptive regrasping.',
    media: { video: `${V}/adaptmanip_preview.mp4`, poster: `${P}/adaptmanip_preview.jpg` },
    links: [
      { label: 'project page', href: 'https://morganbyrd03.github.io/adaptmanip/' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2602.14363' },
      { label: 'pdf', href: 'https://arxiv.org/pdf/2602.14363' },
    ],
  },
  {
    year: 2024,
    title: 'Jacta: A Versatile Planner for Learning Dexterous and Whole-body Manipulation',
    href: 'https://jacta-manipulation.github.io/',
    authors: "Jan Brüdigam, Ali Adeeb Abbas, Maks Sorokin, Kuan Fang, Brandon Hung, Maya Guru, Stefan Sosnowski, Jiuguang Wang, Sandra Hirche, Simon Le Cleac'h",
    venue: 'IEEE Robotics and Automation Letters (RA-L) 2024',
    summary: 'We combine reinforcement learning with sampling-based planning to solve contact-rich manipulation tasks. Sampling-based planners quickly find successful trajectories, but the resulting solutions often lack robustness. We use RL to distill a set of planner demonstrations into a single policy that handles real-world variation and uncertainty.',
    media: { video: `${V}/jacta_preview.mp4`, poster: `${P}/jacta_preview.jpg` },
    links: [
      { label: 'project page', href: 'https://jacta-manipulation.github.io/' },
      { label: 'code', href: 'https://github.com/bdaiinstitute/jacta-manipulation' },
      { label: 'pdf', href: 'https://arxiv.org/pdf/2408.01258.pdf' },
    ],
  },
  {
    year: 2023,
    title: 'On Designing a Learning Robot: Improving Morphology for Enhanced Task Performance and Learning',
    href: 'https://learning-robot.github.io/',
    authors: 'Maks Sorokin, Chuyuan Fu, Jie Tan, C. Karen Liu, Yunfei Bai, Wenlong Lu, Sehoon Ha, Mohi Khansari',
    venue: 'International Conference on Intelligent Robots and Systems (IROS) 2023',
    summary: "A learning-oriented morphology optimization framework that jointly accounts for a robot's body, its onboard perception, and how the two interact across tasks. Holistically optimized morphologies improve task performance by 15–20% across a range of manipulation problems, and require 25× less data to match a human-expert-designed morphology.",
    media: { video: `${V}/learning_robot_morph.mp4`, poster: `${P}/learning_robot_morph.jpg` },
    links: [
      { label: 'project page', href: 'https://learning-robot.github.io/' },
      { label: 'video', href: 'https://www.youtube.com/watch?v=w9B0COjGvfo' },
      { label: 'pdf', href: 'https://arxiv.org/pdf/2303.13390.pdf' },
    ],
  },
  {
    year: 2023,
    title: "Relax, it doesn't matter how you get there!",
    href: 'https://multiscale-behavior.github.io/',
    authors: 'Mehdi Azabou, Michael Mendelson, Maks Sorokin, Shantanu Thakoor, Nauman Ahad, Carolina Urzay, Eva L Dyer',
    venue: 'Neural Information Processing Systems (NeurIPS) 2023',
    honor: 'selected for a spotlight',
    summary: "We introduce Bootstrap Across Multiple Scales (BAMS), a multi-scale self-supervised representation-learning model for behavior analysis. BAMS pools features from encoders with different temporal receptive fields and applies latent bootstrapping objectives in each scale's embedding space, encouraging disentanglement across timescales.",
    media: { video: `${V}/behavior_representations.mp4`, poster: `${P}/behavior_representations.jpg` },
    links: [
      { label: 'project page', href: 'https://multiscale-behavior.github.io/' },
      { label: 'pdf', href: 'https://arxiv.org/pdf/2303.08811.pdf' },
    ],
  },
  {
    year: 2022,
    title: 'Learning to Navigate Sidewalks in Outdoor Environments',
    href: '/publications/sidewalk-navigation',
    authors: 'Maks Sorokin, Jie Tan, C. Karen Liu, Sehoon Ha',
    venue: 'IEEE Robotics and Automation Letters (RA-L) 2022',
    summary: 'A system that enables zero-shot transfer of vision-based policies to outdoor sidewalk navigation. Evaluated on a quadrupedal robot walking 3.2 km of real-world sidewalks with minimal human intervention.',
    media: { video: `${V}/urban_navigation.mp4`, poster: `${P}/urban_navigation.jpg` },
    links: [
      { label: 'project page', href: '/publications/sidewalk-navigation' },
      { label: 'video', href: 'https://www.youtube.com/watch?v=JsAZy3YETwQ' },
      { label: 'pdf', href: 'https://arxiv.org/pdf/2109.05603.pdf' },
    ],
  },
  {
    year: 2022,
    title: 'Human Motion Control of Quadrupedal Robots using Deep Reinforcement Learning',
    href: 'https://sites.google.com/view/humanconquad',
    authors: 'Sunwoo Kim, Maks Sorokin, Jehee Lee, Sehoon Ha',
    venue: 'Proceedings of Robotics: Science and Systems (RSS) 2022',
    summary: 'A motion-control system that lets a human user drive a quadrupedal robot through a wide range of motor tasks — standing, sitting, tilting, manipulating, walking, and turning — in both simulation and on hardware.',
    media: { video: `${V}/humanconquad.mp4`, poster: `${P}/humanconquad.jpg` },
    links: [
      { label: 'project page', href: 'https://sites.google.com/view/humanconquad' },
      { label: 'pdf', href: 'https://arxiv.org/pdf/2204.13336.pdf' },
    ],
  },
  {
    year: 2021,
    title: 'Learning Human Search Behavior from Egocentric View',
    href: 'https://arxiv.org/abs/2011.03618',
    authors: 'Maks Sorokin, Wenhao Yu, Sehoon Ha, C. Karen Liu',
    venue: 'EUROGRAPHICS 2021',
    summary: "We train a vision-based agent to perform object search in a photorealistic 3D scene, and propose a motion-synthesis mechanism that retargets the agent's head motion onto an animated human character (PFNN/NSM) — transferring its search behavior to a humanoid avatar.",
    media: { video: `${V}/object_search_animation.mp4`, poster: `${P}/object_search_animation.jpg` },
    links: [
      { label: 'pdf', href: 'https://arxiv.org/pdf/2011.03618.pdf' },
      { label: 'video', href: 'https://www.youtube.com/watch?v=LvSHpmjt8pU' },
    ],
  },
  {
    year: 2021,
    title: 'A Few Shot Adaptation of Visual Navigation Skills to New Observations using Meta-Learning',
    href: 'https://arxiv.org/abs/2011.03609',
    authors: 'Qian Luo, Maks Sorokin, Sehoon Ha',
    venue: 'The IEEE International Conference on Robotics and Automation (ICRA) 2021',
    summary: 'Vision-based navigation agents can be trained to adapt to new sensor configurations with as few as three shots of experience. Rapid adaptation comes from a bottleneck between the perception and control networks, plus meta-adaptation of the perception component.',
    media: { video: `${V}/sensor_height_adaptation.mp4`, poster: `${P}/sensor_height_adaptation.jpg` },
    links: [
      { label: 'pdf', href: 'https://arxiv.org/pdf/2011.03609.pdf' },
    ],
  },
  {
    year: 2019,
    archive: true,
    title: 'Real2Sim Image Adaptation',
    href: '/publications/real2sim',
    summary: 'Image domain adaptation that maps randomized-texture (or real) images into a single canonical representation. A re-implementation of the <a href="https://arxiv.org/abs/1812.07252" class="link">RCAN paper</a>, swapping the original GAN loss for a <a href="https://arxiv.org/abs/1603.08155" class="link">perceptual/feature loss</a>.',
    media: { image: '/assets/img/sim2sim.png', fit: 'contain' },
    links: [{ label: 'github', href: 'https://github.com/initmaks/ran2can' }],
  },
  {
    year: 2018,
    archive: true,
    title: 'Learning to Swing',
    href: '/publications/learning-to-swing',
    summary: 'A Computer Animation course project: an off-the-shelf Soft Actor-Critic agent learns to build momentum and swing an animated character on a pull-up bar.',
    media: { video: `${V}/learning_to_swing.mp4`, poster: `${P}/learning_to_swing.jpg` },
    links: [{ label: 'project page', href: '/publications/learning-to-swing' }],
  },
  {
    year: 2017,
    archive: true,
    title: 'Behavior Cloning for Autonomous Driving',
    href: '/publications/behavioral-cloning',
    summary: 'An end-to-end image-to-steering control policy, trained via behavior cloning on data from multiple laps and deliberate off-track recoveries recorded by a human driver.',
    media: { video: `${V}/drive.mp4`, poster: `${P}/drive.jpg` },
    links: [{ label: 'github', href: 'https://github.com/initmaks/Self-driving_car_ND/tree/master/Behavioral-Cloning' }],
  },
];

// Group consecutive publications by year, preserving order.
export function byYear(list: Publication[]) {
  const groups: { year: number; items: Publication[] }[] = [];
  for (const p of list) {
    const g = groups[groups.length - 1];
    if (g && g.year === p.year) g.items.push(p);
    else groups.push({ year: p.year, items: [p] });
  }
  return groups;
}
