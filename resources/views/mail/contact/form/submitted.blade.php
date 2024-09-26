<x-mail::message>
    Contact form submitted by **[{{ $name }}](mailto:{{ $email }})**

    @foreach ($lines as $line)
        {{ $line }}
    @endforeach
</x-mail::message>
