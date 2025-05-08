<h1>Blog post on 2 of the given questions out of 7:</h1>

<p>
	Hello! Here I will try to answer the following topics in my writing:
	<br><br>
	<b>1. What are some differences between interfaces and types in TypeScript?</b>
	<br><br>
	and then 
	<br><br>
	<b>2. How does TypeScript help in improving code quality and project maintainability?</b>
</p>

<h2>Undestanding TypeScript types and TypeScript interfaces</h2>
<p>
	Both `interface` and `type` in TypeScript let us write and define the shape of an object, which is a great feature that vanilla JS doesn't have. But since both are similar, they seem to be doing the same thing when we learn to know about them, and that's why it might be quite confusing for beginners, so I think it is a great first topic for a discussion and a blog post! So here I will try my best to explore and understand the differences:
    <ol>
        <li>Both can be used for objects, but the similarities probably end there: while interface can only be used for objects, type can be used for other data types also - primitive and other special types. So in that regard, types are more useful. </li>
        <li>Interface is more powerful than type in one area: declaration merging. Interfaces are called 'extensible', meaning we can declare the same interface multiple times, and merge them! Great choice for API then no doubt!</li>
        <li>Interfaces can only be extended using the `extends` keyword; on the other hand, types use unions and intersections.</li>
    </ol>
</p>

<h2>TypeScript for improving code quality and project maintainability</h2>

<p>
	TypeScript provides a better coding experience and better manageability compared to vanilla JavaScript, thanks to its superior features:
    <ul>
        <li>Type declaration: those who are familiar with other strongly typed programming languages agree that it is a blessing! I mean, things could get ugly without it as the project grows.</li>
        <li>It can detect errors much earlier - during the compile time, which is a great relief for developers.</li>
        <li>As the types are already defined, types can act as a documentation without needing to write separate documents, which most developers don't want to write.</li>
        <li>TypeScript offers powerful features like generics, interfaces, and utility types. Now those are advanced concepts and probably hard to understand at the beginning, but maybe hard to live without afterwards in a large project.</li>
        <li>Autocomplete: Although not a direct credit to the typescript itself, being quite popular means most IDEs have the autocomplete support for it as a built-in feature, which helps coding and refactoring to be so much easier.</li>
    </ul>
</p>
