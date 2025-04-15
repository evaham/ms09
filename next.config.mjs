/** @type {import('next').NextConfig} */

// 환경변수로 GitHub Pages 여부 판단
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
    output: 'export', // 반드시 static export 설정
    basePath: isGithubPages ? '/ms09' : '',
    assetPrefix: isGithubPages ? '/ms09/' : '',
    images: {
      unoptimized: true, // next/image 최적화 비활성화 (필수!)
    }
};

export default nextConfig;
