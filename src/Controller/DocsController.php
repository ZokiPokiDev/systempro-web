<?php

namespace App\Controller;

use Knp\Bundle\MarkdownBundle\MarkdownParserInterface;
use Parsedown;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DocsController extends AbstractController
{
//    /**
//     * @var Filesystem
//     */
//    private $filesystem;
//
//    /**
//     * @var MarkdownParserInterface
//     */
//    private $parser;
//
//    /**
//     * DocsController constructor.
//     *
//     * @param Filesystem              $filesystem
//     * @param MarkdownParserInterface $parser
//     */
//    public function __construct(Filesystem $filesystem, MarkdownParserInterface $parser)
//    {
////        $this->filesystem = $filesystem;
////        $this->parser = $parser;
//    }
//
//    /**
//     * @Route("/", name="docs")
//     */
//    public function index(): Response
//    {
////        $mdFile = $this->filesystem->readlink('./../../docs/README.md');
////        $md = $this->parser->transformMarkdown('`zoki`');
////
////        $parsedown = new Parsedown();
////        $html = $parsedown->line('`zoki`');
////
//////        dump($html);
////
////        return $this->render(
////            'docs/index.html.twig',
////            [
////                'md' => $html,
////            ]
////        );
//    }
}
