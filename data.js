/* =========================================================================
   Publication & research data for Yi Zhao (赵祎)
   Extracted from 论文总结.xlsx; missing author lists filled via DBLP.
   Flags:
     first  -> first or co-first author
     corr   -> corresponding author
     ccfa   -> CCF-A venue (used by the CCF-A filter)
   Tags shown as badges: keep them minimal — only CCF-A / CCF-B.
   =========================================================================*/

const PUBLICATIONS = [
  {
    year: 2026,
    title: "PlotGen-Bench: Evaluating VLMs on Generating Visualization Code from Diverse Plots across Multiple Libraries",
    authors: "Yi Zhao, Zhen Yang, Shuaiqi Duan, Wenmeng Yu, Zhe Su, Jibing Gong*, Jie Tang*",
    venue: "ACL 2026 (Findings)",
    tags: ["CCF-A"], first: true, corr: false, ccfa: true
  },
  {
    year: 2026,
    title: "StabCF: A Stabilized Training Method for Collaborative Filtering",
    authors: "Xi Wu, Wenzhe Zhang, Liangwei Yang, Yi Zhao†, Jiquan Peng, Jibing Gong",
    venue: "KDD 2026",
    tags: ["CCF-A"], first: false, corr: true, ccfa: true
  },
  {
    year: 2026,
    title: "Beyond Pairwise User Transfer: Multimodal Group-Level Relational Preference Modeling for Cross-Domain Recommendation",
    authors: "Xiaohan Fang, Chaozhuo Li, Yi Zhao†, et al.",
    venue: "Expert Systems With Applications",
    tags: [], first: false, corr: true, ccfa: false
  },
  {
    year: 2026,
    title: "Enhancing Global and Local Interests Fusion Based on Kolmogorov-Arnold Networks for Sequential Recommendation",
    authors: "Yili Xu, Xiaohan Fang, Jibing Gong, Yi Zhao, Shijie Wei, Peng Fu, Liping Lv",
    venue: "Multimedia Systems",
    tags: [], first: false, corr: false, ccfa: false
  },
  {
    year: 2025,
    title: "Cross-domain Recommendation via Quantized Disentangled Generative Model",
    authors: "Yi Zhao, Le Chen, Xinchao Feng, Mengpan Chen, Jibing Gong",
    venue: "Information Fusion",
    tags: [], first: true, corr: false, ccfa: false
  },
  {
    year: 2025,
    title: "Beyond Entity Alignment: Towards Complete Knowledge Graph Alignment via Entity-Relation Synergy",
    authors: "Xiaohan Fang, Chaozhuo Li, Yi Zhao, Qian Zang, Litian Zhang, Jiquan Peng, Xi Zhang, Jibing Gong",
    venue: "Expert Systems With Applications",
    tags: [], first: false, corr: false, ccfa: false
  },
  {
    year: 2025,
    title: "Reinforced Heterogeneous Graphlet Design for Knowledge Graph Representation Learning",
    authors: "Jibing Gong, Yuting Lin, Yi Zhao, Tianyu Lin, Xiaohan Fang, Xinchao Feng, Jiquan Peng",
    venue: "Information Sciences",
    tags: ["CCF-B"], first: false, corr: false, ccfa: false
  },
  {
    year: 2025,
    title: "Balancing Global and Local Interests in Cross-Domain Recommendation Systems",
    authors: "Yi Zhao, Jin Zhang, Jibing Gong, Jiquan Peng, Xi Wu, Shishan Gong, Shuying Du",
    venue: "Multimedia Systems",
    tags: [], first: true, corr: false, ccfa: false
  },
  {
    year: 2025,
    title: "Knowledge Graph-based Recommendation via Generative Denoising and Multi-Level Contrastive Learning",
    authors: "Jibing Gong, Xinchao Feng, Qian Zang, Yi Zhao†, Le Chen, Yu Qiu, Jun Feng, Haomin Song, Liangying Peng",
    venue: "Data Intelligence",
    tags: [], first: false, corr: true, ccfa: false
  },
  {
    year: 2025,
    title: "DKGFN: Deep Knowledge Graph Fusion Network for Recommendation",
    authors: "Jibing Gong, Le Chen, Qian Zang, Xinchao Feng, Yi Zhao†, Yu Qiu, Jun Feng, Haomin Song, Liangying Peng",
    venue: "Data Intelligence",
    tags: [], first: false, corr: true, ccfa: false
  },
  {
    year: 2025,
    title: "电力领域基于上下文知识提示的大模型视觉问答技术研究",
    authors: "Yu Qiu, Jun Feng, Zhehui Zheng, Yi Zhao, Haomin Song, Zuge Chen, Shaolan Wang",
    venue: "Journal of Tsinghua University (Science and Technology)",
    tags: [], first: false, corr: false, ccfa: false
  },
  {
    year: 2024,
    title: "Personalized Recommendation via Inductive Spatiotemporal Graph Neural Network",
    authors: "Jibing Gong, Yi Zhao*, Jinye Zhao, Jin Zhang, Guixiang Ma, Shaojie Zheng, Shuying Du, Jie Tang",
    venue: "Pattern Recognition",
    tags: ["CCF-B"], first: true, corr: false, ccfa: false
  },
  {
    year: 2024,
    title: "Cross-domain Recommendation via Adaptive Bi-Directional Transfer Graph Neural Networks",
    authors: "Yi Zhao, Jingxin Ju, Jibing Gong, Jinye Zhao, Mengpan Chen, Le Chen, Xinchao Feng, Jiquan Peng",
    venue: "Knowledge and Information Systems",
    tags: ["CCF-B"], first: true, corr: false, ccfa: false
  },
  {
    year: 2023,
    title: "Beyond the Overlapping Users: Cross-Domain Recommendation via Adaptive Anchor Link Learning",
    authors: "Yi Zhao, Chaozhuo Li, Jiquan Peng, Xiaohan Fang, Feiran Huang, Senzhang Wang, Xing Xie, Jibing Gong*",
    venue: "SIGIR 2023",
    tags: ["CCF-A"], first: true, corr: false, ccfa: true
  },
  {
    year: 2023,
    title: "Improving Vision Transformers with Nested Multi-head Attentions",
    authors: "Jiquan Peng, Chaozhuo Li, Yi Zhao, Yuting Lin, Xiaohan Fang, Jibing Gong",
    venue: "ICME 2023",
    tags: ["CCF-B"], first: false, corr: false, ccfa: false
  },
  {
    year: 2022,
    title: "Reinforced MOOCs Concept Recommendation in Heterogeneous Information Networks",
    authors: "Jibing Gong, Yao Wan, Ye Liu, Lixue Wen, Yi Zhao, Cheng Wang, Qing Li, Wenzheng Feng, Jie Tang",
    venue: "ACM Transactions on the Web (TWEB)",
    tags: ["CCF-B"], first: false, corr: false, ccfa: false
  },
  {
    year: 2022,
    title: "MORE: Toward Improving Paper Author Name Disambiguation",
    authors: "Jibing Gong, Xiaohan Fang, Jiquan Peng, Yi Zhao†, Jinye Zhao",
    venue: "International Journal of Machine Learning and Cybernetics",
    tags: [], first: false, corr: true, ccfa: false
  }
];
