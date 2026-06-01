// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "* Equal Contribution, † Corresponding Author(s)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-i-am-starting-my-phd-at-northeastern-university",
          title: 'I am starting my PhD at Northeastern University.',
          description: "",
          section: "News",},{id: "news-we-released-the-preprint-of-our-paper-vote-vision-language-action-optimization-with-trajectory-ensemble-voting-on-arxiv",
          title: 'We released the preprint of our paper, VOTE: Vision-Language-Action Optimization with Trajectory Ensemble...',
          description: "",
          section: "News",},{id: "news-we-arxived-circuitsense-and-the-hierarchical-synthetic-generation-code",
          title: 'We arxived CircuitSense and the hierarchical synthetic generation code.',
          description: "",
          section: "News",},{id: "news-we-release-our-paper-beyond-overall-accuracy-pose-and-occlusion-driven-fairness-analysis-in-pedestrian-detection-for-autonomous-driving-on-arxiv",
          title: 'We release our paper Beyond Overall Accuracy: Pose- and Occlusion-driven Fairness Analysis in...',
          description: "",
          section: "News",},{id: "news-circuitsense-got-accepted-in-neurips-2025-math-ai-the-5th-workshop-on-mathematical-reasoning-and-ai-and-will-be-presented-in-san-diego-convention-center-on-december-6th",
          title: 'CircuitSense got accepted in NeurIPS 2025 MATH-AI, The 5th Workshop on Mathematical Reasoning...',
          description: "",
          section: "News",},{id: "news-circuitsense-full-version-got-accepted-in-iclr-2026",
          title: 'CircuitSense (full version) got accepted in ICLR 2026!',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
