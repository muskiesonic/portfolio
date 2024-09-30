import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '../ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';

function ProfileCard() {
    const socialLinks = [
        { href: 'https://www.linkedin.com/in/jayson-hilborn/', icon: <FaLinkedin size={20} /> },
        { href: 'https://github.com/muskiesonic', icon: <FaGithub size={20} /> }
    ];

    return (
        <div className="flex max-w-[400px] grow basis-1 m-auto">
            <Card className="border bg-card text-card-foreground shadow-sm rounded-3xl">
                <CardHeader className="flex space-y-1.5 flex-row items-center gap-10 border-b border-secondary">
                    <div className="flex flex-col">
                        <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
                            Jayson Hilborn
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                            Fullstack Software Developer
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="py-4">
                    <p className="font-light">
                        Ready to tackle complex challenges building scalable and user-friendly applications. Finding new
                        and creative solutions to create great user experiences.
                    </p>
                </CardContent>
                <CardFooter className="flex items-center p-6 pt-0">
                    <div className="flex w-full gap-5">
                        {socialLinks.map((social) => (
                            <a className="group inline-block" target="_blank" href={social.href}>
                                <Button className="shadow-[-2px_-2px_#00000069_inset]">{social.icon}</Button>
                            </a>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export { ProfileCard };
