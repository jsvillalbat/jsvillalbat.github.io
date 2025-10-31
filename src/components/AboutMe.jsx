
import { BrainCircuit, Briefcase, Code, User } from "lucide-react";
import cvPDF from "../assets/CV.pdf";


export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate Engineer & Tech Creator
                    </h3>
                    <p className="text-muted-foreground">
                        With over 6 years of experience in Data Science, Machine Learning, and Deep Learning, 
                        I specialize in building algorithms, designing systems, and turning complex ideas into real solutions.
                    </p>
                    <p className="text-muted-foreground">
                        My expertise lies in algorithm design, machine learning operations, data science, deep learning, backend development, 
                        the Internet of Things, research in control systems, and game theory.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href={cvPDF} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" download="Sebastian_Villalba_CV.pdf" target="_blank" rel="noopener noreferrer">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6"> 
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Sofware Development</h4>
                                <p className="text-muted-foreground">Creating tech applications with modern frameworks</p>

                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <BrainCircuit className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> AI Engineer</h4>
                                <p className="text-muted-foreground">Integrating AI in all the applications</p>

                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Managment</h4>
                                <p className="text-muted-foreground">Leading projects from conception to completion with agile methodologies</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};