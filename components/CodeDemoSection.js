import React, { useState, useRef, useEffect } from 'react';
import { LucideCode, Play, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Chart, { Line } from 'chart.js/auto';


const CodeExample = ({ title, description, code, demoComponent }) => {
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runDemo = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-semibold dark:text-white">{title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 dark:text-gray-300" />
            )}
          </button>
          <button
            onClick={runDemo}
            className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Play className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative">
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm font-mono dark:text-gray-300">{code}</code>
        </pre>
      </div>

      <div className={`transition-opacity duration-300 ${isRunning ? 'opacity-100' : 'opacity-0'}`}>
        {demoComponent}
      </div>
    </div>
  );
};

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');

  return (
    <div>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
      <div style={{ backgroundColor: color }} className="h-48 w-full border rounded-lg mt-2">
        Selected Color
      </div>
    </div>
  );
};

const ChartDemo = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      const data = [
        { month: 'Jan', value: 400 },
        { month: 'Feb', value: 300 },
        { month: 'Mar', value: 600 }
      ];

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(d => d.month),
          datasets: [{
            label: 'Monthly Values',
            data: data.map(d => d.value),
            borderColor: '#3b82f6',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="h-48">
      <canvas ref={chartRef} />
    </div>
  );
};

const CodeDemoSection = () => {
  const codeExamples = [
    {
      title: "Data Visualization",
      description: "Interactive chart using Chart.js",
      code: `const data = [
  { month: 'Jan', value: 400 },
  { month: 'Feb', value: 300 },
  { month: 'Mar', value: 600 }
];

const ctx = chartRef.current.getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: data.map(d => d.month),
    datasets: [{
      label: 'Monthly Values',
      data: data.map(d => d.value),
      borderColor: '#3b82f6',
      tension: 0.1
    }]
  }
});`,
      demoComponent: (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
          <ChartDemo />
        </div>
      )
    },
    {
      title: "Animation Library",
      description: "Custom animation hook for React components",
      code: `const useAnimation = (duration = 1000) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const animate = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), duration);
  }, [duration]);

  return [isAnimating, animate];
};`,
      demoComponent: (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg animate-bounce" />
            <div className="w-12 h-12 bg-green-500 rounded-lg animate-pulse" />
            <div className="w-12 h-12 bg-purple-500 rounded-lg animate-spin" />
          </div>
        </div>
      )
    },
    {
      title: "Color Picker",
      description: "Interactive color picker for dynamic background color",
      code: `const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');

  return (
    <div>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
      <div style={{ backgroundColor: color }} className="h-48 w-full border rounded-lg mt-2">
        Selected Color
      </div>
    </div>
  );
};`,
      demoComponent: (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
          <ColorPicker />
        </div>
      )
    }
  ];

  return (
    <section>
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 dark:text-white">
            <LucideCode className="h-6 w-6" />
            Code Examples
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <CodeExample
                key={index}
                title={example.title}
                description={example.description}
                code={example.code}
                demoComponent={example.demoComponent}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CodeDemoSection;
